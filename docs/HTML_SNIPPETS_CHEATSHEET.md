# 📚 Шпаргалка по HTML сниппетам

> Быстрые сниппеты для создания HTML структур

---

## 🚀 Как использовать

1. Начните печатать **префикс** в HTML файле
2. Нажмите **Tab** для вставки
3. Используйте **Tab** для перехода между полями
4. В выпадающих списках используйте **стрелки** для выбора опций

---

## 🖼️ Изображения

| Префикс  | Описание                                      |
| -------- | --------------------------------------------- |
| `pi`     | Picture элемент с webp                        |
| `picset` | Responsive picture с 2x/1x для разных экранов |

**Примеры:**

```html
pi [Tab]
<!-- <picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture> -->

picset [Tab]
<!-- Полная адаптивная картинка с webp и retina -->
```

---

## 🎨 SVG

| Префикс    | Описание                 |
| ---------- | ------------------------ |
| `sv`       | SVG спрайт из `/images/` |
| `svimg`    | SVG спрайт из `/img/`    |
| `svimgcms` | SVG спрайт для CMS       |

**Примеры:**

```html
sv [Tab]
<!-- <svg class="icon" width="24" height="24">
  <use href="/images/sprite.svg#icon-name"></use>
</svg> -->
```

---

## 🏗️ БЭМ структуры

| Префикс | Описание                             |
| ------- | ------------------------------------ |
| `bemb`  | БЭМ блок с элементом                 |
| `bembf` | БЭМ блок с элементом и модификатором |

**Примеры:**

```html
bemb [Tab]
<!-- <div class="block">
  <div class="block__element">
    ...
  </div>
</div> -->

bembf [Tab]
<!-- <div class="block block--modifier">
  <div class="block__element">
    ...
  </div>
</div> -->
```

---

## 🔘 Кнопки и ссылки

| Префикс   | Описание                                     |
| --------- | -------------------------------------------- |
| `btn`     | Кнопка с классами (primary/secondary/danger) |
| `btnicon` | Кнопка с иконкой                             |
| `a`       | Ссылка (с опцией target="\_blank")           |

**Примеры:**

```html
btn [Tab]
<!-- <button class="btn btn--primary" type="button">
  Text
</button> -->

btnicon [Tab]
<!-- <button class="btn btn--primary" type="button">
  <svg class="icon" width="20" height="20">
    <use href="/images/sprite.svg#icon"></use>
  </svg>
  Button Text
</button> -->

a [Tab]
<!-- <a href="#">Link</a>
     или <a href="#" target="_blank" rel="noopener noreferrer">Link</a> -->
```

---

## 🎴 Карточки

| Префикс | Описание                           |
| ------- | ---------------------------------- |
| `pcard` | Карточка товара (полная структура) |
| `card`  | Простая карточка                   |

**Примеры:**

```html
pcard [Tab]
<!-- Полная карточка товара с:
  - Изображением
  - Бейджем (sale/new/hot)
  - Заголовком
  - Категорией
  - Ценой
  - Кнопкой "В корзину" -->

card [Tab]
<!-- <div class="card">
  <div class="card__header">
    <h3 class="card__title">Title</h3>
  </div>
  <div class="card__body">
    ...
  </div>
</div> -->
```

---

## 📝 Формы

| Префикс    | Описание                 |
| ---------- | ------------------------ |
| `form`     | Форма с кнопкой отправки |
| `inp`      | Input поле с label       |
| `textarea` | Textarea с label         |
| `sel`      | Select с options         |
| `check`    | Checkbox с label         |

**Примеры:**

```html
form [Tab]
<!-- <form class="form" action="#" method="post">
  ...
  <button class="btn btn--primary" type="submit">Отправить</button>
</form> -->

inp [Tab]
<!-- <div class="form-field">
  <label for="id" class="form-field__label">Label</label>
  <input type="text" id="id" name="id" class="form-field__input" placeholder="">
</div> -->

textarea [Tab]
<!-- Textarea с label -->

sel [Tab]
<!-- Select dropdown с options -->

check [Tab]
<!-- <label class="checkbox">
  <input type="checkbox" name="name" value="value">
  <span class="checkbox__label">Label</span>
</label> -->
```

**Типы input:** `text`, `email`, `tel`, `password`, `number`

---

## 📦 Секции и контейнеры

| Префикс | Описание                          |
| ------- | --------------------------------- |
| `sec`   | Секция с контейнером и заголовком |
| `cont`  | Контейнер (container)             |
| `grid`  | Grid контейнер с элементами       |

**Примеры:**

```html
sec [Tab]
<!-- <section class="section">
  <div class="container">
    <h2 class="section__title">Title</h2>
    ...
  </div>
</section> -->

cont [Tab]
<!-- <div class="container">
  ...
</div> -->

grid [Tab]
<!-- <div class="grid">
  <div class="grid__item">...</div>
  <div class="grid__item">...</div>
  <div class="grid__item">...</div>
</div> -->
```

---

## 🧭 Навигация

| Префикс  | Описание                   |
| -------- | -------------------------- |
| `nav`    | Навигация (nav с ul/li)    |
| `header` | Header с logo и навигацией |

**Примеры:**

```html
nav [Tab]
<!-- <nav class="nav">
  <ul class="nav__list">
    <li class="nav__item">
      <a href="#" class="nav__link">Link</a>
    </li>
  </ul>
</nav> -->

header [Tab]
<!-- <header class="header">
  <div class="container">
    <div class="header__inner">
      <a href="/" class="header__logo">Logo</a>
      <nav class="header__nav">
        ...
      </nav>
    </div>
  </div>
</header> -->
```

---

## 🔲 Модальные окна

| Префикс | Описание                          |
| ------- | --------------------------------- |
| `modal` | Модальное окно (полная структура) |

**Пример:**

```html
modal [Tab]
<!-- <div class="modal" id="modal" aria-hidden="true">
  <div class="modal__overlay" data-modal-close></div>
  <div class="modal__content">
    <button class="modal__close" data-modal-close>
      <svg>...</svg>
    </button>
    <div class="modal__header">
      <h2 class="modal__title">Title</h2>
    </div>
    <div class="modal__body">
      ...
    </div>
  </div>
</div> -->
```

---

## 📋 Списки

| Префикс | Описание                         |
| ------- | -------------------------------- |
| `ul`    | Ненумерованный список с классами |
| `ol`    | Нумерованный список с классами   |

**Примеры:**

```html
ul [Tab]
<!-- <ul class="list">
  <li class="list__item">Item</li>
  <li class="list__item">...</li>
</ul> -->

ol [Tab]
<!-- <ol class="list">
  <li class="list__item">Item</li>
</ol> -->
```

---

## 📊 Таблицы

| Префикс | Описание                |
| ------- | ----------------------- |
| `table` | Таблица с thead и tbody |

**Пример:**

```html
table [Tab]
<!-- <table class="table">
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
</table> -->
```

---

## 🎬 Медиа

| Префикс  | Описание                   |
| -------- | -------------------------- |
| `video`  | Video элемент с source     |
| `iframe` | Iframe (для YouTube и др.) |

**Примеры:**

```html
video [Tab]
<!-- <video class="video" controls>
  <source src="video.mp4" type="video/mp4">
  Ваш браузер не поддерживает видео.
</video> -->

iframe [Tab]
<!-- <iframe src="url" width="100%" height="400" frameborder="0" allowfullscreen loading="lazy"></iframe> -->
```

---

## 🍞 Breadcrumbs (Хлебные крошки)

| Префикс       | Описание              |
| ------------- | --------------------- |
| `breadcrumbs` | Навигационная цепочка |

**Пример:**

```html
breadcrumbs [Tab]
<!-- <nav class="breadcrumbs" aria-label="Хлебные крошки">
  <ol class="breadcrumbs__list">
    <li class="breadcrumbs__item">
      <a href="/" class="breadcrumbs__link">Главная</a>
    </li>
    <li class="breadcrumbs__item breadcrumbs__item--active">
      Current
    </li>
  </ol>
</nav> -->
```

---

## 🎵 Аккордеон

| Префикс     | Описание        |
| ----------- | --------------- |
| `accordion` | Аккордеон (FAQ) |

**Пример:**

```html
accordion [Tab]
<!-- <div class="accordion">
  <div class="accordion__item">
    <button class="accordion__header" type="button">
      Question
      <span class="accordion__icon"></span>
    </button>
    <div class="accordion__body">
      <div class="accordion__content">
        Answer
      </div>
    </div>
  </div>
</div> -->
```

---

## 📑 Табы

| Префикс | Описание       |
| ------- | -------------- |
| `tabs`  | Табы (вкладки) |

**Пример:**

```html
tabs [Tab]
<!-- <div class="tabs">
  <div class="tabs__nav">
    <button class="tabs__button tabs__button--active" data-tab="tab1">
      Tab 1
    </button>
    <button class="tabs__button" data-tab="tab2">
      Tab 2
    </button>
  </div>
  <div class="tabs__content">
    <div class="tabs__panel tabs__panel--active" id="tab1">
      Content 1
    </div>
    <div class="tabs__panel" id="tab2">
      Content 2
    </div>
  </div>
</div> -->
```

---

## 🔥 Топ-10 самых используемых

1. **`sec`** — секция с контейнером
2. **`card`** — простая карточка
3. **`btn`** — кнопка
4. **`inp`** — input поле
5. **`grid`** — grid контейнер
6. **`bemb`** — БЭМ структура
7. **`nav`** — навигация
8. **`pi`** — picture элемент
9. **`form`** — форма
10. **`modal`** — модальное окно

---

## 💡 Частые комбинации

### Создание страницы товаров

```html
1. sec [Tab] → Секция 2. grid [Tab] → Grid для карточек 3. pcard [Tab] →
Карточка товара (повторить N раз)
```

### Создание формы обратной связи

```html
1. form [Tab] → Форма 2. inp [Tab] → Имя 3. inp [Tab] → Email (выбрать type:
email) 4. textarea [Tab] → Сообщение 5. check [Tab] → Согласие на обработку
данных
```

### Создание хедера

```html
1. header [Tab] → Header со структурой 2. nav [Tab] → добавить в header__nav 3.
btn [Tab] → Кнопка "Войти"
```

### Создание модального окна с формой

```html
1. modal [Tab] → Модалка 2. form [Tab] → Форма внутри modal__body 3. inp [Tab] →
Поля формы
```

---

## 📝 Советы по использованию

1. **Используйте `bemb`** для быстрого создания БЭМ структуры
2. **`pcard`** создает полную готовую карточку товара
3. **`modal`** включает все необходимые aria-атрибуты для доступности
4. **`picset`** автоматически создает responsive картинку с webp
5. **`tabs`** и `accordion` включают data-атрибуты для JS
6. **Все формы** имеют правильную структуру с label и accessibility
7. **`loading="lazy"`** автоматически добавлен к img и iframe

---

## 🎯 Популярные паттерны

### Hero секция

```html
sec [Tab] → hero cont [Tab] h1 + p + btn [Tab]
```

### Галерея изображений

```html
grid [Tab] → gallery pi [Tab] (повторить несколько раз)
```

### Карточки с модалками

```html
grid [Tab] → cards card [Tab] btn [Tab] → data-modal-open="modal1" modal [Tab]
```

### FAQ страница

```html
sec [Tab] → faq accordion [Tab] (добавить больше accordion__item)
```

---

**Создано:** 18 февраля 2026 г.
**Версия:** 1.0

> 💡 **Совет:** Комбинируйте HTML сниппеты с SCSS сниппетами для максимальной скорости разработки!
