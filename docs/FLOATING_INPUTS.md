# Floating Label Inputs - Документация

## Описание

Floating label inputs - это современный паттерн UI, где label автоматически поднимается вверх при фокусе или когда поле заполнено. Это создает более компактный и элегантный внешний вид форм.

## Использование

### HTML структура

```html
<div class="input-floating-wrapper">
  <input type="text" id="my-input" placeholder="Введите текст" />
  <label for="my-input">Название поля</label>
</div>
```

**Важно:** Label должен идти ПОСЛЕ input в HTML для работы CSS селектора `~`.

### SCSS миксины

#### 1. `@mixin input-floating-wrapper`

Создает контейнер для floating input.

```scss
.my-wrapper {
  @include input-floating-wrapper;
}
```

#### 2. `@mixin input-floating-label`

Стили для label элемента.

```scss
.my-label {
  @include input-floating-label;
}
```

#### 3. `@mixin input-floating($height)`

Стили для input с поддержкой floating label.

```scss
.my-input {
  @include input-floating(px2rem(64));
}
```

**Параметры:**

- `$height` - высота input (по умолчанию: `px2rem(64)`)

### Готовые классы

В `_base.scss` уже подключены готовые классы:

```html
<!-- Просто используйте эти классы -->
<div class="input-floating-wrapper">
  <input type="email" id="email" placeholder="example@email.com" />
  <label for="email">Email</label>
</div>
```

## Примеры

### Базовый пример

```html
<div class="input-floating-wrapper">
  <input type="text" id="username" placeholder="Введите имя" />
  <label for="username">Имя пользователя</label>
</div>
```

### С разными типами input

```html
<!-- Email -->
<div class="input-floating-wrapper">
  <input type="email" id="email" placeholder="example@email.com" />
  <label for="email">Email</label>
</div>

<!-- Password -->
<div class="input-floating-wrapper">
  <input type="password" id="password" placeholder="Введите пароль" />
  <label for="password">Пароль</label>
</div>

<!-- Number -->
<div class="input-floating-wrapper">
  <input type="number" id="quantity" placeholder="0" />
  <label for="quantity">Количество</label>
</div>

<!-- Tel -->
<div class="input-floating-wrapper">
  <input type="tel" id="phone" placeholder="+7 (999) 123-45-67" />
  <label for="phone">Телефон</label>
</div>
```

### С состоянием ошибки

```html
<div class="input-floating-wrapper">
  <input type="email" id="email-error" class="error" value="invalid" />
  <label for="email-error">Email</label>
</div>
<span class="form-error">Неверный формат email</span>
```

### Disabled состояние

```html
<div class="input-floating-wrapper">
  <input type="text" id="disabled" disabled value="Отключено" />
  <label for="disabled">Название</label>
</div>
```

### Полная форма

```html
<form>
  <div class="input-floating-wrapper" style="margin-bottom: 24px">
    <input type="text" id="name" placeholder="Введите имя" />
    <label for="name">Имя</label>
  </div>

  <div class="input-floating-wrapper" style="margin-bottom: 24px">
    <input type="email" id="email" placeholder="example@email.com" />
    <label for="email">Email</label>
  </div>

  <div class="input-floating-wrapper" style="margin-bottom: 32px">
    <input type="password" id="password" placeholder="Введите пароль" />
    <label for="password">Пароль</label>
  </div>

  <button type="submit" class="btn btn--primary btn--block">Отправить</button>
</form>
```

## JavaScript (опционально)

Для поддержки полей с начальным значением добавьте скрипт:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const floatingInputs = document.querySelectorAll(
    '.input-floating-wrapper input',
  );

  floatingInputs.forEach((input) => {
    // Проверяем при загрузке
    if (input.value) {
      input.classList.add('has-value');
    }

    // Отслеживаем изменения
    input.addEventListener('input', () => {
      if (input.value) {
        input.classList.add('has-value');
      } else {
        input.classList.remove('has-value');
      }
    });
  });
});
```

## Кастомизация через CSS переменные

```scss
.input-floating-wrapper {
  input {
    // Переопределение цветов
    color: var(--text, #333);
    background: rgba(255, 255, 255, 0.9);
    border-color: var(--main, #42b883);
  }

  label {
    color: var(--text_gray, #999);
  }

  input:focus ~ label {
    color: var(--main, #42b883);
  }
}
```

## Создание своего варианта

```scss
.my-custom-input {
  @include input-floating-wrapper;

  input {
    @include input-floating(px2rem(56)); // Меньшая высота
    border-radius: radius('base'); // Другой радиус
  }

  label {
    @include input-floating-label;
    font-weight: font-weight('semibold'); // Жирный label
  }
}
```

## Особенности

1. **Placeholder**: По умолчанию скрыт, показывается только при фокусе
2. **Number inputs**: Стрелки спиннера скрыты для чистого вида
3. **Адаптивность**: Автоматически уменьшается на мобильных устройствах
4. **Анимация**: Плавный переход label (0.2s ease)
5. **Состояния**: Поддержка `:focus`, `:disabled`, `.error`, `.has-value`

## Доступность (a11y)

- ✅ Label связан с input через атрибуты `id` и `for`
- ✅ Поддержка навигации с клавиатуры
- ✅ Видимые состояния фокуса
- ✅ Поддержка screen readers

## Совместимость

- ✅ Chrome/Edge (последние версии)
- ✅ Firefox (последние версии)
- ✅ Safari (последние версии)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Live Demo

Откройте `/forms.html` для живых примеров.
