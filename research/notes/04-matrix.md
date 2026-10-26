# Матриця порівняння — 5 конкурентів (04)

Для матриці взято пʼять компаній зі списку в `03-competitors.md`, по
одній-дві з кожної групи: **Robinson & Sinclair** та **Cellar 33**
(ХАРД — обидва мають повністю відкритий сайт без жодного логін-муру,
тож дають найбільше реального матеріалу для порівняння), **Business
France Marketplace** (СОФТ — найбагатший повністю публічний приклад
серед СОФТ-кандидатів), **Faire** та **Toptal** (АСПІРАЦІЙНІ — два
найкраще підтверджені живим переглядом приклади). Матеріал зібрано
через WebFetch публічних сторінок і знімки головних екранів у
`research/screens/` (Playwright-еквівалент — браузерні інструменти
Claude in Chrome). У жоден кабінет/логін не заходили.

## Таблиця

| Вісь | Robinson & Sinclair | Cellar 33 | Business France Marketplace | Faire | Toptal |
|---|---|---|---|---|---|
| **Перший екран** | Фото винного льоху, заголовок "Exporters of fine South African wines", підзаголовок "One contact point, connecting the world with South Africa's most exceptional wines" *(WebFetch robinson-sinclair.com; `research/screens/robinson-sinclair-home.jpg`)* | Фото пляшки шампанського, заголовок "Elevating wines & spirits across global markets", кнопка "Discover ↓" *(WebFetch cellar-33.com; `research/screens/cellar-33-home.jpg`)* | Держбанер (прапор Франції + лого), заголовок "Find great French-made products"; кукі-банер перекриває частину екрана при першому завантаженні *(WebFetch marketplace.businessfrance.fr; `research/screens/business-france-marketplace-home.jpg`)* | Фото вуличної крамниці, заголовок "Find your next bestseller", одразу під ним два окремі CTA: "Sign up to buy" і менший "Are you a brand? Sign up to sell" *(WebFetch faire.com; `research/screens/faire-home.jpg`)* | Перемикач "I'm looking for: Talent / Consulting & Services", заголовок "Hire the Top 3% of Freelance Talent", картки профілів з "PREVIOUSLY AT Google DeepMind / Microsoft / McKinsey" *(WebFetch toptal.com; `research/screens/toptal-home.jpg`)* |
| **Ключова задача з брифу** | Немає форми підбору на головній — роль описана текстом ("one contact point"), задача виконується через розділи Wineries/Regions і завершується контактом *(WebFetch robinson-sinclair.com)* | Секція "Your trusted export agency" звертається до обох аудиторій (buyer/producer) в одному абзаці; три блоки послуг (Export & distribution / Strategic marketing / Website creation) ведуть на сторінку Services *(WebFetch cellar-33.com)* | Покупець шукає через пошук або 5 категорій секторів → підкатегорії → лістинги продавців → сторінки продавця з каталогом; окремо є довідник продавців і календар виставок *(WebFetch marketplace.businessfrance.fr)* | Рітейлер шукає бренди за категорією/пошуком; картки брендів одразу показують назву, локацію, рейтинг і бейджі цінностей без входу *(WebFetch faire.com; скріншот)* | Клієнт тисне "Hire Top Talent" → 3 кроки "Hiring Made Easy": обговорення потреб з експертом → підібрані кандидати за кілька днів → пробний період з оплатою лише за умови задоволення *(WebFetch toptal.com)* |
| **Перевірені** | Ні — жодного слова чи бейджа про верифікацію; виноробні названі просто "boutique" і "from the best regions" без критеріїв *(WebFetch robinson-sinclair.com)* | Частково — "trusted", "exclusive", "select portfolio", "curated collection" є одразу на головній, але без конкретних критеріїв чи цифр *(WebFetch cellar-33.com)* | Так, прямо — секція "Why choose" каже "Thousands of vetted suppliers" одразу під хіро *(WebFetch marketplace.businessfrance.fr)* | Непрямо — немає слова "vetted", довіра через рейтинги (4.8, 1 566 відгуків), бейджі ("100,000+ brands", "bestseller") і цитати засновників; процес відбору брендів не описаний *(WebFetch faire.com)* | Так, дуже явно — "Top 3%", "rigorously tested and vetted", бейдж "Verified Expert" на картках, 98% trial-to-hire success rate, рейтинг Newsweek №1 *(WebFetch toptal.com; скріншот)* |
| **Завершення задачі** | "Quick Enquiry" у футері + окрема сторінка Contact (телефон, email, адреса); форми заявки чи логін-муру немає *(WebFetch robinson-sinclair.com)* | Кнопка "Get in Touch" веде на сторінку Contact Us; форми на головній немає, логін-муру немає *(WebFetch cellar-33.com)* | Доступ обмежений — що саме відбувається на сторінці каталогу продавця (чи потрібен логін для контакту/ціни), з головної сторінки не видно; є лише "Log in/Sign up" і "Contact us" без пояснення, яка дія вимагає акаунта *(WebFetch marketplace.businessfrance.fr)* | Логін-мур на фінальному кроці: гуртова ціна схована за "Unlock wholesale price" → задача завершується реєстрацією ("Sign up to buy" / "Sign up to sell" → `/apply`) *(WebFetch faire.com; скріншот)* | Доступ обмежений — кнопка "Hire Top Talent" веде на `/hire`, чи потрібен акаунт на цьому кроці з головної сторінки не видно *(WebFetch toptal.com)* |
| **Мова інтерфейсу** | Лише англійська, без перемикача мов *(WebFetch robinson-sinclair.com)* | Англійська; у футері є ярлик "Language", варіанти не видно без додаткової взаємодії *(WebFetch cellar-33.com)* | Англійська (локаль en_US у шляхах сторінки) *(WebFetch marketplace.businessfrance.fr)* | Англійська з явним селектором "EN-US" у хедері — мультимовність передбачена архітектурою *(WebFetch faire.com; скріншот)* | Англійська; окремого перемикача мов на головній не виявлено *(WebFetch toptal.com; скріншот)* |

## Спільні патерни ринку

- Жоден із пʼяти сайтів не ховає базову навігацію чи опис компанії за
  логіном — вхід потрібен лише в момент переходу до транзакції чи
  персоналізованого етапу (ціна, найм, каталог-деталі), а не для
  огляду самої пропозиції.
- У всіх пʼятьох перший екран одразу називає роль сайту одним
  реченням у заголовку (export agency / bestseller marketplace / top
  talent) — без проміжної сторінки "про нас", яку треба читати, щоб
  зрозуміти, що це за продукт.
- ХАРД-приклади (Robinson & Sinclair, Cellar 33) не показують явних
  цифр чи бейджів верифікації — на відміну від СОФТ (Business France)
  і АСПІРАЦІЙНИХ (Faire, Toptal), де довіра побудована або на прямому
  слові "vetted", або на кількісних показниках.

## Відмінності

- Завершення задачі: ХАРД-приклади закінчуються лише "живим"
  контактом (email/телефон/форма), СОФТ і АСПІРАЦІЙНІ — реєстрацією
  чи акаунтом.
- Двоаудиторність на першому екрані: Faire явно розводить "buy" і
  "sell" вже одним рядком у хіро, тоді як Cellar 33 згадує обидві
  аудиторії текстом усередині абзацу, не як окремі CTA.
- Конкретність доказу довіри: Toptal дає точні цифри (98%, Top 3%,
  42 974 відгуки), тоді як Robinson & Sinclair не наводить жодного
  числа чи слова про відбір виноробень.

## Відкриті питання до PM

- Чи є у VH Selection вже готові конкретні цифри довіри (кількість
  виноробень у портфоліо, країн експорту, років на ринку), які можна
  винести в хіро за прикладом Toptal/Business France, чи доведеться
  формулювати довіру якісно, без цифр?
- Чи варто ховати будь-яку частину контенту VH Selection за
  реєстрацією (як ціну у Faire чи, ймовірно, каталог у Business
  France), чи повністю відкритий сайт (як у Robinson & Sinclair й
  Cellar 33) ближче до нашої моделі довіри?
- У якій точці флоу VH Selection має стояти "вхід" у воронку — окремий
  CTA для кожної аудиторії вже в хіро (модель Faire), чи один
  загальний "Get in touch" (модель Cellar 33)?
