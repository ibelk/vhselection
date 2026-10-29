# Матриця порівняння — 5 конкурентів (04, перебудовано)

**Перебудова після додавання конкурентів від клієнта.** Клієнт
назвав пʼять нових прямих (ХАРД) конкурентів (додані в
`03-competitors.md`), і два з них виявились сильнішими за
матеріалом, ніж оригінальна п'ятірка — особливо за віссю
«Перевірені». Тому склад матриці змінено:

- **Прибрано:** Robinson & Sinclair (ХАРД) і Faire (АСПІРАЦІЙНІ).
- **Додано:** **Winexport Management** (ХАРД) — єдиний знайдений
  прямий конкурент, що відкрито й конкретно описує протокол
  верифікації партнерів ("A proprietary protocol pairs each estate
  with vetted importers... Our partners are chosen, not collected"),
  тобто ламає раніше припущений патерн "жоден прямий конкурент не
  показує доказу відбору"; і **Les Grands Vins & Co** (ХАРД) —
  сильний через форму контакту, що одразу сегментує відвідувача за
  роллю (Producer/Winery, Importer/Distributor, Other) — готовий до
  копіювання патерн кваліфікації ліда.
- **Залишено:** **Cellar 33** (ХАРД) — навмисно, як контраст
  усередині того самого прямого ринку: показує, що в ніші "прямий
  конкурент VH Selection" одні гравці (Winexport Management) вже
  вміють конкретно доводити відбір, а інші (Cellar 33) — ні, це не
  структурне обмеження ніші, а вибір конкретної компанії. **Business
  France Marketplace** (СОФТ) і **Toptal** (АСПІРАЦІЙНІ) залишені без
  змін — найбагатший повністю публічний приклад і найсильніший
  еталон квантифікованої довіри відповідно.

Матеріал для Cellar 33, Business France Marketplace і Toptal
повторно використано з попередньої версії матриці (вже перевірений
WebFetch); Winexport Management і Les Grands Vins & Co перевірено
заново через WebFetch і знімки головних екранів у
`research/screens/`. У жоден кабінет/логін не заходили.

## Таблиця

| Вісь | Winexport Management | Les Grands Vins & Co | Cellar 33 | Business France Marketplace | Toptal |
|---|---|---|---|---|---|
| **Перший екран** | Фото тосканських виноградників на світанку, заголовок "Bringing Italian wine to the world's most discerning tables", підзаголовок "We are the export partner Italian wineries trust — connecting curated estates with vetted importers, sommeliers and retailers in over forty countries"; два CTA "Discover Services" і "Partner With Us" *(WebFetch winexport-management.com; `research/screens/winexport-management-home.jpg`)* | Фото виноградника у сутінках, заголовок "Fine wine expertise, worldwide reach", підзаголовок "A specialized agency bridging carefully selected Burgundy estates with premium importers, distributors and buyers across 30+ countries"; два CTA "Discover the Agency" і "Get in Touch" *(WebFetch lesgrandsvins.co; `research/screens/les-grands-vins-home.jpg`)* | Фото пляшки шампанського, заголовок "Elevating wines & spirits across global markets", кнопка "Discover ↓" *(WebFetch cellar-33.com; `research/screens/cellar-33-home.jpg`)* | Держбанер (прапор Франції + лого), заголовок "Find great French-made products"; кукі-банер перекриває частину екрана при першому завантаженні *(WebFetch marketplace.businessfrance.fr; `research/screens/business-france-marketplace-home.jpg`)* | Перемикач "I'm looking for: Talent / Consulting & Services", заголовок "Hire the Top 3% of Freelance Talent", картки профілів з "PREVIOUSLY AT Google DeepMind / Microsoft / McKinsey" *(WebFetch toptal.com; `research/screens/toptal-home.jpg`)* |
| **Ключова задача з брифу** | Меню з 9 пунктів (Services, Brand Strategy, Estates, Regions, About, Blog, Trade Fairs, Contact); секція "For Italian wineries" із CTA "Start the conversation" веде на Contact; окремо показано 18 господарств з лінком "See all 37 estates" *(WebFetch winexport-management.com)* | Меню: Home, The Agency, Services, Contact; CTA "Get in Touch" веде на форму контакту, яка одразу запитує роль відвідувача (Producer/Winery, Importer/Distributor, Other) перед повідомленням — задача завершується вже сегментованою заявкою, а не загальним "message" *(WebFetch lesgrandsvins.co)* | "Your trusted export agency" звертається до обох аудиторій (buyer/producer) в одному абзаці; три блоки послуг (Export & distribution / Strategic marketing / Website creation) ведуть на сторінку Services *(WebFetch cellar-33.com)* | Покупець шукає через пошук або 5 категорій секторів → підкатегорії → лістинги продавців → сторінки продавця з каталогом; окремо є довідник продавців і календар виставок *(WebFetch marketplace.businessfrance.fr)* | Клієнт тисне "Hire Top Talent" → 3 кроки "Hiring Made Easy": обговорення потреб з експертом → підібрані кандидати за кілька днів → пробний період з оплатою лише за умови задоволення *(WebFetch toptal.com)* |
| **Перевірені** | **Так, явно й конкретно** — "A proprietary protocol pairs each estate with vetted importers and HORECA buyers in the right markets"; "Our partners are chosen, not collected"; "Our work is selective, our methods rigorous, our relationships long". Підкріплено точним числом — 37 іменованих господарств у 8 регіонах, а не абстрактний "широкий портфель". Єдиний прямий (ХАРД) конкурент із такою конкретністю мови відбору *(WebFetch winexport-management.com)* | Частково — "carefully selected Burgundy estates", відбір "with the utmost care" і "based on the impeccable quality of their wines", але без названого процесу, порогів чи кроків перевірки — якісні слова без розшифровки, той самий розрив, що в Cellar 33 *(WebFetch lesgrandsvins.co)* | Частково — "trusted", "exclusive", "select portfolio", "curated collection" є одразу на головній, але без конкретних критеріїв чи цифр *(WebFetch cellar-33.com)* | Так, прямо — секція "Why choose" каже "Thousands of vetted suppliers" одразу під хіро *(WebFetch marketplace.businessfrance.fr)* | Так, дуже явно — "Top 3%", "rigorously tested and vetted", бейдж "Verified Expert" на картках, 98% trial-to-hire success rate, рейтинг Newsweek №1 *(WebFetch toptal.com; скріншот)* |
| **Завершення задачі** | "Partner With Us"/"Start the conversation" → сторінка Contact з email (fabricosta60@winexportmanagement.it), телефоном і трьома офісами; форми заявки на головній немає, логін-муру немає *(WebFetch winexport-management.com)* | "Get in Touch" → форма на сторінці Contact: ім'я, прізвище, email, роль (Producer/Importer/Other), повідомлення, кнопка "Send message"; логін-муру немає *(WebFetch lesgrandsvins.co)* | Кнопка "Get in Touch" веде на сторінку Contact Us; форми на головній немає, логін-муру немає *(WebFetch cellar-33.com)* | Доступ обмежений — що саме відбувається на сторінці каталогу продавця (чи потрібен логін для контакту/ціни), з головної сторінки не видно; є лише "Log in/Sign up" і "Contact us" без пояснення, яка дія вимагає акаунта *(WebFetch marketplace.businessfrance.fr)* | Доступ обмежений — кнопка "Hire Top Talent" веде на `/hire`, чи потрібен акаунт на цьому кроці з головної сторінки не видно *(WebFetch toptal.com)* |
| **Мова інтерфейсу** | Англійська й італійська, перемикач EN/IT у хедері *(WebFetch winexport-management.com; скріншот)* | Дев'ять мов у перемикачі хедера: EN, FR, ES, RU, IT, PT, 中文, 日本, UA *(WebFetch lesgrandsvins.co; скріншот)* | Англійська; у футері є ярлик "Language", варіанти не видно без додаткової взаємодії *(WebFetch cellar-33.com)* | Англійська (локаль en_US у шляхах сторінки) *(WebFetch marketplace.businessfrance.fr)* | Англійська; окремого перемикача мов на головній не виявлено *(WebFetch toptal.com; скріншот)* |

## Спільні патерни ринку

- Жоден із пʼяти сайтів не ховає базову навігацію чи опис компанії за
  логіном — вхід потрібен лише в момент переходу до транзакції чи
  персоналізованого етапу (ціна, найм, каталог-деталі), а не для
  огляду самої пропозиції.
- У всіх пʼятьох перший екран одразу називає роль сайту одним
  реченням у заголовку (export partner / export agency / bestseller
  marketplace / top talent) — без проміжної сторінки "про нас", яку
  треба читати, щоб зрозуміти, що це за продукт.
- **Переглянуто:** конкретна, доказова мова верифікації — вже не
  межа між "прямий ринок" і "інші категорії". Winexport Management
  (ХАРД) має найконкретнішу мову відбору з усіх пʼяти, сильнішу навіть
  за Business France; тоді як Cellar 33 і Les Grands Vins & Co (обидва
  теж ХАРД) лишаються на рівні якісних слів без розшифровки. Це
  означає, що слабкість виміру "Перевірені" — не структурне обмеження
  ніші прямого експортного консалтингу, а вибір конкретної компанії:
  конкурент VH Selection вже довів, що це можливо зробити добре в
  цій-таки категорії.

## Відмінності

- Конкретність доказу довіри всередині одного й того самого прямого
  ринку: Winexport Management дає іменований протокол і точне число
  (37 господарств), Cellar 33 і Les Grands Vins & Co — лише якісні
  прикметники ("trusted", "impeccable quality") без жодного числа чи
  названого кроку перевірки.
- Структура лідогенерації: Les Grands Vins & Co запитує роль
  відвідувача (Producer/Importer/Other) прямо у формі контакту;
  Winexport Management і Cellar 33 ведуть на загальну сторінку
  Contact без попередньої сегментації за роллю.
- Багатомовність: Les Grands Vins & Co показує 9 мов у перемикачі,
  Winexport Management — 2 (EN/IT), Cellar 33 і Toptal — фактично
  лише англійську; Business France — одна локаль (en_US) без видимого
  перемикача.

## Відкриті питання до PM

- Тепер, коли відомо, що конкретна мова верифікації ("chosen, not
  collected", іменований протокол, точне число господарств) є
  реалістичною навіть для малої консалтингової компанії в нашій же
  ніші (Winexport Management це вже робить) — чи варто VH Selection
  формулювати щось близьке за духом, чи свідомо диференціюватися
  іншою мовою довіри?
- Чи варто копіювати патерн Les Grands Vins & Co — питати роль
  відвідувача (виноробня/імпортер/інше) прямо у формі контакту — чи
  це додає тертя для аудиторії, яка й так мало звикла заповнювати
  структуровані форми (за висновком з кроку 06 про брак
  sales-ресурсу в цільових виноробень)?
- Скільки мов інтерфейсу реалістично підтримувати на MVP — ближче до
  мінімуму Winexport Management (2 мови) чи до максимуму Les Grands
  Vins & Co (9 мов), з огляду на те, що бриф VH Selection визначає
  аудиторію як міжнародну?
