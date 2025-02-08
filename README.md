# Tarot Reading 2025

🌍 Available languages: [English](#english) | [Русский](#русский)
<a name="русский"></a>

## Описание

Основная идея: разложить карты Таро по классическому сценарию из 3 карт и получить их интерпретацию при помощи ИИ.
Чем проект может быть полезен: дать ответы на интересующие вопросы по описанному ранее сценарию.

### Мотивация проекта

В странах СНГ сейчас модная тенденция на тарологов. Люди готовы платить деньги за эти услуги и поверить в "магию". Мне показалось интересным реализовать схожий механизм с учётом современных решений.
Что я получил: отработка хуков, взаимодействие компонентов, проработка логики приложения.

### Основной функционал

-   Проект начат при помощи [Create React App](https://github.com/facebook/create-react-app),
-   Для доступа к нейросети Meta: llama-3.3-70b-instruct был использован [OpenRouter](https://openrouter.ai),
-   Стилизация была сделана при помощи [tailwindcss](https://v3.tailwindcss.com),
-   Для стилизации карт на небольших экранах и экранах смартофнов взят [SwiperJS](https://swiperjs.com),

## Установка

Для запуска сборки использовались имеющиеся в CRA команды.

### Команды

1. `npm -i` для установки зависимостей,
2. `npm start` для запуска проекта локально [http://localhost:3000](http://localhost:3000),
3. `npm run build` для сборки билда.

## Принцип работы

> [!IMPORTANT]
> Работа приложения требует получения API Key на сайте OpenRouter. Доступна быстрая регистрация при помощи Google. Key можно создать на одноимённой вкладке в профиле.
> Внутри проекта временное хранение ключа реализуется при помощи sessionStorage.

Порядок следования:

1. Введите API ключ в меню,
2. Введите вопрос,
3. Нажмите на "Расклад" для получения карт,
4. Нажмите на "Спросить",
5. Нажмите на "Сбросить" для сброса результата.

> [!NOTE]
> Кнопки становятся доступными по мере выполнения порядка следования. Сброс будет доступен после получения ответа от ИИ, либо иного результата.

## Что можно добавить

-   Меню, содержащее больший функционал,
-   История запросов,
-   Заглушка загрузки приложения, карт и ответа от OpenRouter,
-   покрыть тестами.

---

# Tarot Reading 2025

🌍 Available languages: [English](#english) | [Русский](#русский)
<a name="english"></a>

## Description

The main idea: to lay out Tarot cards according to the classic scenario of 3 cards and get their interpretation using AI.
How the project can be useful: provide answers to questions of interest based on the scenario described earlier.

### Project motivation

In the CIS countries there is now a fashionable trend for tarot readers. People are ready to pay money for these services and believe in "magic". It seemed interesting to me to implement a similar mechanism taking into account modern solutions.
What I got: working out hooks, interaction of components, working out the logic of the application.

### Main functionality

-   The project was started with [Create React App](https://github.com/facebook/create-react-app),
-   [OpenRouter](https://openrouter.ai) was used to access the Meta: llama-3.3-70b-instruct neural network,
-   Styling was done with [tailwindcss](https://v3.tailwindcss.com),
-   [SwiperJS](https://swiperjs.com) was used to style maps on small screens and smartphone screens.

## Installation

The commands available in CRA were used to run the build.

### Commands

1. `npm -i` to install dependencies,
2. `npm start` to run the project locally [http://localhost:3000](http://localhost:3000),
3. `npm run build` to build the build.

## How it works

> [!IMPORTANT]
> The application requires obtaining an API Key on the OpenRouter website. Quick registration is available using Google. The Key can be created on the tab of the same name in the profile.
> Inside the project, temporary storage of the key is implemented using sessionStorage.

The order of the sequence:

1. Enter the API key in the menu,
2. Enter the question,
3. Click on "Layout" to get cards,
4. Click on "Ask",
5. Click on "Reset" to reset the result.

> [!NOTE]
> The buttons become available as the sequence is completed. Reset will be available after receiving a response from the AI, or another result.

## What can be added

-   Menu containing more functionality,
-   Request history,
-   Loading stub for: app, Tarot cards and responses
-   testing.
