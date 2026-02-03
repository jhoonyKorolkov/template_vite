// ============================================
// COMPOSABLE ДЛЯ РАБОТЫ С ФОРМАМИ
// ============================================

import { reactive, toRaw } from 'vue';

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
}

export interface FormState {
  loading: boolean;
  error: string | null;
  errors: Record<string, string[]>;
  success: boolean;
}

export function useForm<T extends Record<string, any>>(initialValues: T) {
  const formData = reactive<T>({ ...initialValues });
  const state = reactive<FormState>({
    loading: false,
    error: null,
    errors: {},
    success: false,
  });

  // Сброс ошибок
  const clearErrors = () => {
    state.error = null;
    state.errors = {};
  };

  // Сброс формы
  const reset = () => {
    Object.assign(formData, initialValues);
    clearErrors();
    state.success = false;
  };

  // Обработка submit
  const handleSubmit = async (
    submitFn: (data: T) => Promise<any>,
    options?: {
      onSuccess?: (response: any) => void;
      onError?: (error: ApiError) => void;
      resetOnSuccess?: boolean;
    },
  ) => {
    clearErrors();
    state.loading = true;
    state.success = false;

    try {
      const response = await submitFn(toRaw(formData) as T);
      state.success = true;

      if (options?.onSuccess) {
        options.onSuccess(response);
      }

      if (options?.resetOnSuccess) {
        reset();
      }

      return response;
    } catch (error) {
      const apiError = error as ApiError;
      state.error = apiError.message;

      if (apiError.errors) {
        state.errors = apiError.errors;
      }

      if (options?.onError) {
        options.onError(apiError);
      }

      throw error;
    } finally {
      state.loading = false;
    }
  };

  // Получение ошибки для конкретного поля
  const getFieldError = (field: string): string | null => {
    return state.errors[field]?.[0] || null;
  };

  return {
    formData,
    state,
    clearErrors,
    reset,
    handleSubmit,
    getFieldError,
  };
}
