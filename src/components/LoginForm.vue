<script setup lang="ts">
import { useForm } from '../composables/useForm';

// Props от бэкенда (Laravel передаст через data-props)
interface Props {
  actionUrl?: string; // URL куда отправлять форму
  method?: string; // POST, PUT и т.д.
}

const props = withDefaults(defineProps<Props>(), {
  actionUrl: '/api/login',
  method: 'POST',
});

// Используем composable для управления формой
const { formData, state, handleSubmit, getFieldError } = useForm({
  email: '',
  password: '',
});

// Обработка отправки формы - просто отправляем на URL от бэкенда
const onSubmit = async (e: Event) => {
  e.preventDefault();

  await handleSubmit(
    async (data) => {
      const response = await fetch(props.actionUrl, {
        method: props.method,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include', // Для cookies/sessions
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw {
          message: error.message || 'Ошибка отправки',
          errors: error.errors || {},
        };
      }

      return await response.json();
    },
    {
      onSuccess: (response) => {
        console.log('✅ Успешная отправка:', response);
        alert(response.message || 'Успешно!');
        // Можно редиректить
        if (response.redirect) {
          window.location.href = response.redirect;
        }
      },
      onError: (error) => {
        console.error('❌ Ошибка:', error);
      },
    }
  );
};
</script>

<template>
  <form class="login-form" @submit="onSubmit">
    <h3 class="login-form__title">Вход в систему</h3>

    <!-- Общая ошибка -->
    <div v-if="state.error" class="alert alert--danger">
      {{ state.error }}
    </div>

    <!-- Email -->
    <div class="form-group">
      <input v-model="formData.email" name="email" type="email" placeholder="Email"
        :class="{ 'has-error': getFieldError('email') }" :disabled="state.loading" />
      <span v-if="getFieldError('email')" class="error-message">
        {{ getFieldError('email') }}
      </span>
    </div>

    <!-- Password -->
    <div class="form-group">
      <input v-model="formData.password" name="password" type="password" placeholder="Пароль"
        :class="{ 'has-error': getFieldError('password') }" :disabled="state.loading" />
      <span v-if="getFieldError('password')" class="error-message">
        {{ getFieldError('password') }}
      </span>
    </div>

    <!-- Кнопка -->
    <button type="submit" :disabled="state.loading">
      <span v-if="state.loading">Отправка...</span>
      <span v-else>Войти</span>
    </button>
  </form>
</template>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.has-error {
  border-color: #dc3545 !important;
}

.error-message {
  font-size: 0.875rem;
  color: #dc3545;
}

.hint {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #6c757d;
  text-align: center;
}
</style>
