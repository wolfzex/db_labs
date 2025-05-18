# Тестування працездатності системи

Тестування сервісу проводилося за допомогою додатку Postman.

## Запуск сервера

<img src="./media/server.png" alt="Сервер успішно запущено">

## Тестування модуля Tag

### POST /api/tag - Створення тегу

<img src="./media/postTag.png" alt="Успішне створення нового тегу">

### GET /api/tag - Отримання списку всіх тегів

<img src="./media/getTag.png" alt="Успішне отримання списку всіх тегів">

### GET /api/tag/:id - Отримання тегу за ідентифікатором

<img src="./media/getTagById.png" alt="Успішне отримання тегу за його ID">

### PATCH /api/tag/:id - Оновлення інформації про тег

<img src="./media/patchTag.png" alt="Успішне оновлення інформації існуючого тегу">

### DELETE /api/tag/:id - Видалення тегу

<img src="./media/deleteTag.png" alt="Успішне видалення тегу">

## Тестування модуля Source

### POST /api/source - Створення джерела

<img src="./media/postSource.png" alt="Успішне створення нового джерела">

### GET /api/source - Отримання списку всіх джерел

<img src="./media/getSource.png" alt="Успішне отримання списку всіх джерел">

### GET /api/source/:id - Отримання джерела за ідентифікатором

<img src="./media/getSourceById.png" alt="Успішне отримання джерела за його ID">

### PATCH /api/source/:id - Оновлення інформації про джерело

<img src="./media/patchSource.png" alt="Успішне оновлення інформації існуючого джерела">

### DELETE /api/source/:id - Видалення джерела

<img src="./media/deleteSource.png" alt="Успішне видалення джерела">

## Тестування обробки винятків

### EXCEPTION(Tag): DataMissingException (Відсутні обов'язкові дані при створенні тегу)

<img src="./media/dataMissingExceptionTag.png" alt="Помилка: Відсутні дані для створення тегу">

### EXCEPTION(Tag): TagNotFoundException (Тег не знайдено при запиті/оновленні)

<img src="./media/tagNotFoundException.png" alt="Помилка: Тег з вказаним ID не знайдено (GET/PATCH)">

### EXCEPTION(Tag): TagNotFoundException (Тег не знайдено при оновленні)
<img src="./media/tagNotFoundExceptionUpdate.png" alt="Помилка: Тег з вказаним ID не знайдено для оновлення">

### EXCEPTION(Source): SourceNotFoundException (Джерело не знайдено при запиті/оновленні)

<img src="./media/sourceNotFoundException.png" alt="Помилка: Джерело з вказаним ID не знайдено (GET/PATCH)">

### EXCEPTION(Source): SourceNotFoundException (Джерело не знайдено при видаленні)

<img src="./media/sourceNotFoundExceptionDelete.png" alt="Помилка: Джерело з вказаним ID не знайдено для видалення">