# Microcopy VH Selection — інвентар

Формат ключа: `екран.зона.елемент`, латиницею, малими літерами, слова через
дефіс. `екран` — ім'я файлу зі `sitemap.md` без розширення (`home`,
`catalog`, `winery`, `contact`); якщо текст однаковий на всіх екранах —
`common` замість екрана. Ключ не змінюється, навіть коли сам текст рядка
згодом зміниться.

Поки це інвентар (крок 11). До кінця уроку він стане джерелом правди для
всього тексту продукту — зараз нічого не переписано, лише зібрано й
позначено.

**Що НЕ потрапило в таблицю, і чому:** підписи `.zone-label` (джерело
зони — напр. "Зона: Main job (flows.md, Flow 1, вузол A → E)"), нотатки
`.zone-action` (пояснення головної дії зони й симуляційні посилання для
станів), навігатор станів («Стани цього екрана» + список станів) і
рядок «Ви тут: Картка виноробні…» на `winery*.html`. Усе це —
інструментарій самого вайрфрейму (`wireframes/_conventions.md`), а не
текст інтерфейсу продукту: він описує джерела й допомагає будувати
вайрфрейм, але не піде в реальний продукт. Збирати його як microcopy
означало б змішати документацію процесу з текстом, який реально
побачить відвідувач.

Додав дві колонки понад мінімум запиту: **Джерело** (хто пише рядок —
продукт, зовнішні дані чи дані користувача) і **Примітка** (де саме
екрани говорять про те саме по-різному) — щоб позначки з другої частини
завдання були прямо в таблиці, а не в окремому списку збоку.

## Таблиця

**Крок 08:** колонка «Рядок» тепер англійською (`research.md`,
ВИСНОВОК 6 — сайт стартує англійською; voice.md, «Мова продукту:
англійська»). Українські оригінали — в git-історії та розділах «Крок
02»–«Крок 07» нижче, де фіксувались тодішні правки; ключ, екран, зона,
тип і джерело не змінились, лише сама мова рядка.

| Ключ | Екран | Зона | Рядок | Тип рядка | Джерело | Примітка |
|---|---|---|---|---|---|---|
| `common.header.tagline` | common | шапка | VH Selection — export consulting and marketing for wine | заголовок | продукт | |
| `common.nav.home` | common | глобальна навігація | Home | посилання | продукт | |
| `common.nav.catalog` | common | глобальна навігація | Catalog | посилання | продукт | |
| `common.nav.contact` | common | глобальна навігація | Contact | посилання | продукт | |
| `common.footer.description` | common | підвал | VH Selection is an international consulting and marketing company for boutique wineries and mid-scale wine producers. | текст | продукт | Виправлено на кроці 03 — у живому HTML (усі 15 файлів) рядок мав ще й «(CLAUDE.md, «Опис продукту»)» в кінці; цей інвентар уже фіксував правильний текст, але сам файл відставав — тепер синхронізовано |
| `home.footer.social-facebook` | home | підвал — соцмережі | Facebook | посилання | продукт | Новий ключ, крок 04 — рядок існував на екрані, але не був в інвентарі (знайдено суворою перевіркою) |
| `home.footer.social-instagram` | home | підвал — соцмережі | Instagram | посилання | продукт | Новий ключ, крок 04 — та сама причина |
| `home.footer.social-linkedin` | home | підвал — соцмережі | LinkedIn | посилання | продукт | Новий ключ, крок 04 — та сама причина; реальні URL акаунтів не підтверджені (research.md), href лишається заглушкою — це розмітка, не текст |
| `common.actions.retry` | common | відновлення після помилки (`home-error`, `contact-error`, `catalog-error`, `winery-error`) | Try again | кнопка | продукт | Послідовно однакова скрізь — для порівняння з рештою кнопок нижче |
| `common.actions.start-conversation` | common | головний CTA (`home.html` — Main job; `winery.html` — рішення) | Start the conversation → | кнопка | продукт | Порівняти з `home.testimonial.empty-recovery` і `contact.form.title` — та сама дія, без «→» |
| `common.criteria.title` | common | чекліст критеріїв відбору (`home.html`, `winery.html` — обидва базові) | How we select partners | заголовок | продукт | |
| `common.criteria.row-experience` | common | чекліст критеріїв відбору | Active export experience — 3+ years | текст | продукт | |
| `common.criteria.row-volume` | common | чекліст критеріїв відбору | Annual production volume — 50,000–500,000 bottles | текст | продукт | |
| `common.criteria.row-certification` | common | чекліст критеріїв відбору | Certification of origin (DOC/DOCG/AOC or equivalent) — required | текст | продукт | |
| `common.criteria.row-audit` | common | чекліст критеріїв відбору | Personal winery inspection by a VH Selection curator — before catalog listing | текст | продукт | |
| `common.loading.label` | common | стан завантаження (`home-loading` — уся сторінка одним цілим, крок 06; `catalog-loading`, `winery-loading`) | Loading… | повідомлення стану | продукт | |
| `home.hero.title` | home | Main job | Reach a real export deal through a vetted partner | заголовок | продукт | «partner» тут узагальнено; порівняти з `catalog.empty.cold-start` і `winery.profile.name` (конкретна назва) — той самий об'єкт, три формулювання |
| `home.hero.body` | home | Main job | For wineries without an in-house international sales team. We open access to promising wine markets and connect you directly with vetted importers. We guide your export growth from start to finish. | текст | продукт | Виправлено на кроці 02 (прибрано примітку-джерело) і кроці 07 (коротші речення, voice.md «Довжина речень»); перекладено англійською на кроці 08 |
| `home.funnel.disclaimer` | home | воронка відбору / умова ризику | Exact figures aren't confirmed yet. | текст | продукт | Виправлено на кроці 02 — прибрано згадку «вайрфрейму» й «ресерчу»; перекладено на кроці 08 |
| `home.funnel.row-applications` | home | воронка відбору / умова ризику | Applications reviewed monthly — `[?] N` | текст | продукт (значення не визначено) | Текст-заглушка: `[?] N` — ресерч не підтверджує цифру (research.md, ВИСНОВОК 2) |
| `home.funnel.row-accepted` | home | воронка відбору / умова ризику | Accepted into the portfolio — `[?] X%` | текст | продукт (значення не визначено) | Текст-заглушка, та саме застереження |
| `home.funnel.row-wineries` | home | воронка відбору / умова ризику | Wineries represented — `[?] N` | текст | продукт (значення не визначено) | Текст-заглушка, та саме застереження |
| `home.audience.title` | home | Для кого цей сайт | Who we're for | заголовок | продукт | |
| `home.audience.wineries-heading` | home | Для кого цей сайт | Wineries | заголовок | продукт | |
| `home.audience.wineries-body` | home | Для кого цей сайт | Family and mid-scale wineries: want to start exporting or enter new markets, don't have an in-house international sales team, are looking for a representative at trade fairs abroad or an importer. For them, VH Selection is an international export partner. | текст | продукт | Виправлено на кроці 02 (узгодження) і кроці 07 (коротші речення); перекладено на кроці 08 |
| `home.audience.importers-heading` | home | Для кого цей сайт | Importers and distributors | заголовок | продукт | |
| `home.audience.importers-body` | home | Для кого цей сайт | Importers, national distributors, wine retail chains, HoReCa distributors, wine buyers — the company is a source of vetted producers. | текст | продукт | |
| `home.testimonial.quote` | home | блок довіри: named-відгук | "VH Selection connected us with three new suppliers before the end of the first quarter — and each one matched the criteria they'd shown us upfront." | текст | зовнішні дані | Приклад для вайрфрейму (ВІДГУК — реальний текст прийде від клієнта, продукт його не пише) |
| `home.testimonial.attribution` | home | блок довіри: named-відгук | — Marco Ferretti, Head of Sourcing, Ferretti Import S.r.l. (contact made after ProWein 2025) | текст | зовнішні дані | Ім'я, посада, компанія — дані з ВІДГУКУ, не продуктовий текст |
| `home.testimonial.empty-message` | home-empty | блок довіри: named-відгук, порожній стан | No partner testimonial published yet. | повідомлення стану | продукт | Виправлено на кроці 02 (прибрано «Порожній стан:» і «named-»); перекладено на кроці 08 |
| `home.testimonial.empty-recovery` | home-empty | блок довіри: named-відгук, порожній стан | Start the conversation | посилання | продукт | Та сама дія, що `common.actions.start-conversation`, без «→» — порівняти. Виправлено на кроці 04 (перенесено з `.zone-action`) |
| `home.criteria.empty-message` | home-empty | чекліст критеріїв відбору, порожній стан | Detailed criteria aren't published yet. We only work with vetted partners. | повідомлення стану | продукт | Виправлено на кроці 02 (прибрано мову flow-діаграми); перекладено на кроці 08 |
| `home.criteria.empty-recovery` | home-empty | чекліст критеріїв відбору, порожній стан | Start the conversation | посилання | продукт | Новий ключ, крок 04 — та сама дія, що тепер є на `home.testimonial.empty-recovery`; раніше лежала лише в `.zone-action`, без ключа |
| `home.error.message` | home-error | уся сторінка, помилка | Error: the page failed to load. | повідомлення стану | продукт | Новий ключ, крок 06 — замінює `home.testimonial.error-message` (крок 05, видалено). Користувач слушно зауважив: для сторінки без бекенду нелогічно, щоб один блок не завантажився, а решта лишилась видимою — помилка тепер стосується всієї сторінки; перекладено на кроці 08 |
| `home.error.support-link` | home-error | уся сторінка, помилка | contact us through the form | посилання | продукт | Новий ключ, крок 06 — замінює `home.testimonial.error-support-link` (крок 05, видалено) |
| `contact.form.title` | contact | контактна форма | Start the conversation | заголовок | продукт | Та сама дія/фраза, що `common.actions.start-conversation`, без «→» — порівняти |
| `contact.form.intro` | contact | контактна форма | Tell us who you are and what you're looking for. We'll reply in a way that's relevant to your situation. | текст | продукт | Виправлено на кроці 03 (примітка-джерело) і кроці 07 (коротші речення); перекладено на кроці 08 |
| `contact.form.label-role` | contact | контактна форма | I am a | підпис поля | продукт | |
| `contact.form.option-role-placeholder` | contact | контактна форма | Choose a role | текст | продукт | |
| `contact.form.option-role-winery` | contact | контактна форма | Winery | текст | продукт | |
| `contact.form.option-role-importer` | contact | контактна форма | Importer / distributor | текст | продукт | |
| `contact.form.option-role-other` | contact | контактна форма | Other | текст | продукт | |
| `contact.form.label-name` | contact | контактна форма | Name | підпис поля | продукт | |
| `contact.form.label-email` | contact | контактна форма | Email | підпис поля | продукт | |
| `contact.form.label-message` | contact | контактна форма | Message | підпис поля | продукт | |
| `contact.form.submit` | contact | контактна форма | Submit application | кнопка | продукт | |
| `contact.form.error-email` | contact-error | контактна форма, помилка — невалідні поля | Error: enter a valid email. | повідомлення стану | продукт | |
| `contact.form.error-message-required` | contact-error | контактна форма, помилка — невалідні поля | Error: fill in the message. | повідомлення стану | продукт | |
| `contact.form.sample-name` | contact-error | контактна форма, помилка — невалідні поля | Giulia Conti | текст | дані користувача | Приклад заповненої заявки — у продукті це вводить сам відвідувач; ім'я не перекладається |
| `contact.form.sample-email-invalid` | contact-error | контактна форма, помилка — невалідні поля | giulia@ | текст | дані користувача | |
| `contact.error.service-down-message` | contact-error | контактна форма, помилка — сервіс недоступний | Error: service unavailable. The application from Giulia Conti (Winery) was filled in correctly, but it didn't go through. | повідомлення стану | продукт + дані користувача (ім'я) | |
| `contact.loading.sample-fields` | contact-loading | контактна форма, завантаження | Winery / Giulia Conti / giulia@contirosso.it / "Looking for an importer in Scandinavia for our sparkling wine range." | текст | дані користувача | Приклад уже заповненої заявки, що надсилається |
| `contact.loading.submitting-label` | contact-loading | контактна форма, завантаження | Submitting… | кнопка | продукт | |
| `contact.success.title` | contact-success | контактна форма, успіх | Thank you — application received | заголовок | продукт | |
| `contact.success.confirmation` | contact-success | контактна форма, успіх | We've received your application as a Winery from Giulia Conti (giulia@contirosso.it). | повідомлення стану | продукт + дані користувача (ім'я, email) | |
| `contact.success.next-steps` | contact-success | контактна форма, успіх | Next: a VH Selection curator will contact you personally — outside the site. | текст | продукт | Виправлено на кроці 03 (прибрано зайву примітку-джерело); перекладено на кроці 08 |
| `catalog.title` | catalog | список виноробень | Winery list | заголовок | продукт | |
| `catalog.intro` | catalog | фільтри каталогу | Narrow your search to the partners that truly fit. By region, variety, and certifications. | текст | продукт | Виправлено на кроці 03 (примітка-джерело) і кроці 07 (коротші речення); перекладено на кроці 08 |
| `catalog.filters.label-region` | catalog | фільтри каталогу | Region / country of origin | підпис поля | продукт | |
| `catalog.filters.option-region-any` | catalog | фільтри каталогу | Any region | текст | продукт | |
| `catalog.filters.option-region-toscana` | catalog | фільтри каталогу | Toscana, Italia | текст | зовнішні дані | Географічна назва, не продуктовий текст |
| `catalog.filters.option-region-bordeaux` | catalog | фільтри каталогу | Bordeaux, France | текст | зовнішні дані | |
| `catalog.filters.option-region-puglia` | catalog | фільтри каталогу | Puglia, Italia | текст | зовнішні дані | |
| `catalog.filters.option-region-languedoc` | catalog | фільтри каталогу | Languedoc, France | текст | зовнішні дані | |
| `catalog.filters.label-variety` | catalog | фільтри каталогу | Variety / specialty | підпис поля | продукт | |
| `catalog.filters.option-variety-any` | catalog | фільтри каталогу | Any specialty | текст | продукт | |
| `catalog.filters.option-variety-still-red` | catalog | фільтри каталогу | Still, red | текст | продукт | |
| `catalog.filters.option-variety-still-white-rose` | catalog | фільтри каталогу | Still, rosé/white | текст | продукт | |
| `catalog.filters.option-variety-sparkling` | catalog | фільтри каталогу | Sparkling | текст | продукт | |
| `catalog.filters.label-certificates` | catalog | фільтри каталогу | Certifications | підпис поля | продукт | |
| `catalog.filters.cert-docg` | catalog | фільтри каталогу | DOCG | текст | зовнішні дані | Офіційна категорія сертифікації походження, не продуктовий текст |
| `catalog.filters.cert-doc` | catalog | фільтри каталогу | DOC | текст | зовнішні дані | |
| `catalog.filters.cert-aoc` | catalog | фільтри каталогу | AOC | текст | зовнішні дані | |
| `catalog.list.col-name` | catalog | список карток виноробень | Name | підпис поля | продукт | |
| `catalog.list.col-region` | catalog | список карток виноробень | Region | підпис поля | продукт | |
| `catalog.list.col-specialty` | catalog | список карток виноробень | Specialty | підпис поля | продукт | |
| `catalog.list.col-cert` | catalog | список карток виноробень | Certification | підпис поля | продукт | |
| `catalog.list.row-conti-rosso` | catalog | список карток виноробень | Tenuta Conti Rosso — Toscana, Italia — still, red — DOCG | текст | зовнішні дані | Запис ВИНОРОБНІ — дані каталогу, не продуктовий текст |
| `catalog.list.row-valliere` | catalog | список карток виноробень | Château Vallière — Bordeaux, France — still, red — AOC | текст | зовнішні дані | |
| `catalog.list.row-masseria` | catalog | список карток виноробень | Masseria delle Rose — Puglia, Italia — still, rosé/white — DOC | текст | зовнішні дані | |
| `catalog.list.row-hauterive` | catalog | список карток виноробень | Domaine Hauterive — Languedoc, France — sparkling — AOC | текст | зовнішні дані | |
| `catalog.empty.cold-start` | catalog-empty | порожній стан: каталог ще порожній | No partners published in the catalog yet. | повідомлення стану | продукт | Виправлено на кроці 03 (прибрано «Порожній стан:» і гібрид); перекладено на кроці 08 |
| `catalog.empty.cold-start-recovery` | catalog-empty | порожній стан: каталог ще порожній | Start the conversation | кнопка | продукт | Новий ключ, крок 04 — порожній стан не мав жодної дії в реальному тексті (лише глобальна навігація), порушувало правило voice.md, Мікрокопі → «Порожній стан» |
| `catalog.empty.no-results` | catalog-empty | порожній стан: фільтри без результату | No wineries match these filters. None in the catalog fit this combination. | повідомлення стану | продукт | Виправлено на кроці 03 (прибрано ярлик); перекладено на кроці 08 |
| `catalog.empty.broaden-filters` | catalog-empty | порожній стан: фільтри без результату | Try broader filters | кнопка | продукт | Виправлено на кроці 03 — канонічна назва зі «Словника» замінила мову flow-діаграми |
| `catalog.error.message` | catalog-error | помилка: каталог недоступний | Error: the catalog is unavailable. The winery list failed to load. | повідомлення стану | продукт | |
| `winery.profile.name` | winery | профіль ВИНОРОБНІ | Tenuta Conti Rosso | заголовок | зовнішні дані | Назва конкретної виноробні — порівняти з узагальненим «партнер» на `home.hero.title` і `catalog.empty.cold-start` |
| `winery.profile.location` | winery | профіль ВИНОРОБНІ | Toscana, Italia — still, red | текст | зовнішні дані | |
| `winery.wines.title` | winery | список ВИНО | Wines | заголовок | продукт | |
| `winery.wines.col-variety` | winery | список ВИНО | Grape variety | підпис поля | продукт | |
| `winery.wines.col-cert` | winery | список ВИНО | Certification | підпис поля | продукт | |
| `winery.wines.row-sangiovese` | winery | список ВИНО | Sangiovese — DOCG | текст | зовнішні дані | |
| `winery.wines.row-chianti` | winery | список ВИНО | Chianti Classico — DOCG Riserva | текст | зовнішні дані | |
| `winery.wines.row-vermentino` | winery | список ВИНО | Vermentino — DOC | текст | зовнішні дані | |
| `winery.testimonial.quote` | winery | named-відгук для цієї виноробні | "We met the owner of Tenuta Conti Rosso at the VH Selection stand during ProWein 2025 — within a month we were already finalizing our first shipment of Chianti Classico." | текст | зовнішні дані | |
| `winery.testimonial.attribution` | winery | named-відгук для цієї виноробні | — Daqin Huang, Senior Buyer, Business France Wine Desk (ProWein 2025) | текст | зовнішні дані | |
| `winery.decision.back-to-list` | winery | рішення: критерії й відгуки переконують? | Not convinced yet? Back to the winery list. | посилання | продукт | Виправлено на кроці 03 (третя особа → інфінітив, тепер збігається з `winery.error.back-to-list`); перекладено на кроці 08 |
| `winery.error.message` | winery-error | помилка: картку не вдалось відкрити | Error: the winery details failed to load. | повідомлення стану | продукт | Виправлено на кроці 03 — прибрано зайве перше речення, що повторювало заголовок зони, не додаючи факту |
| `winery.error.back-to-list` | winery-error | помилка: картку не вдалось відкрити | back to the winery list | посилання | продукт | Порівняти з `winery.decision.back-to-list` |
| `winery.generic.title` | winery-error, winery-loading | заголовок екрана (конкретна виноробня ще/вже не відома) | Winery profile | заголовок | продукт | Новий ключ, крок 04 — рядок існував на екрані, не було ключа. Слово «виноробня» тут у значенні категорії/екрана (зі «Словника»), не ролі довіри; перекладено на кроці 08 |

## Підсумок позначок (друга частина завдання)

**Той самий предмет — різні назви:**
- ВИНОРОБНЯ-як-партнер: «партнер» (`home.hero.title`) / «виноробня-партнер» (`catalog.empty.cold-start`) / конкретна назва компанії (`winery.profile.name`) — три формулювання того самого об'єкта.

**Та сама дія — різні назви кнопок/посилань:**
- «Почати розмову →» (`common.actions.start-conversation`) проти «Почати розмову» без стрілки (`home.testimonial.empty-recovery`, `contact.form.title`).
- «повертається до списку виноробень» (`winery.decision.back-to-list`, третя особа) проти «повернутися до списку виноробень» (`winery.error.back-to-list`, інфінітив) — та сама дія на тому самому екрані, різна граматична форма.

**AI-кліше, бадьорий тон, зайві оклики, емодзі:** не знайдено жодного — ні
«Ой, щось пішло не так», ні «Вітаємо!», ні окликів, ні емодзі в жодному з
15 файлів.

**Канцелярит і мова системи:**
- `catalog.empty.broaden-filters` («Пробує ширші фільтри →») написано
  мовою flow-діаграми (третя особа, опис дії користувача), а не як
  звернення до користувача — на відміну від решти кнопок відновлення
  (`common.actions.retry`, `contact.form.submit`).
- Три місця, де внутрішня примітка-джерело потрапила прямо в текст для
  користувача, а не лишилась в `.zone-label`/`.zone-action`:
  `home.hero.body` («…(CLAUDE.md, «Опис продукту»; jtbd.md, Main
  job)»), `contact.form.intro` («…(jtbd.md, job R4: …)»),
  `catalog.intro` («…(jtbd.md, job R1)»).

**Тексти-заглушки:** `home.funnel.row-applications`,
`home.funnel.row-accepted`, `home.funnel.row-wineries` — значення
`[?] N` / `[?] X%`, свідомо позначені як непідтверджена гіпотеза
(research.md, ВИСНОВОК 2), а не вигадані числа.

**Рядки із зовнішніх систем і даних (продукт їх не пише, не
переписувати; підпис/заголовок поряд — наш, його можна змінити):**
- ВІДГУК (named-testimonial): `home.testimonial.quote` +
  `home.testimonial.attribution`; `winery.testimonial.quote` +
  `winery.testimonial.attribution`.
- ВИНОРОБНЯ/ВИНО (записи каталогу): `winery.profile.name`,
  `winery.profile.location`, `winery.wines.row-*`,
  `catalog.list.row-*`.
- Географічні назви й сертифікати з офіційних реєстрів:
  `catalog.filters.option-region-*`, `catalog.filters.cert-*`.
- Дані, які вводить сам відвідувач (ЗАЯВКА): зразки в
  `contact.form.sample-name`, `contact.form.sample-email-invalid`,
  `contact.loading.sample-fields`, і ім'я/email усередині
  `contact.error.service-down-message` / `contact.success.confirmation`.

## Крок 02 — переписано за voice.md (Головний)

Відкрито головний екран (`sitemap.md` → «Екрани», `home.html`) і всі
його стани (`home-empty.html`, `home-error.html`, `home-loading.html`).
Ключі не змінено — лише текст. Зовнішні дані (`home.testimonial.*`) не
торкались. Таблиця — точно те, що змінилось:

| Ключ | Було | Стало | Чому |
|---|---|---|---|
| `home.hero.body` | «Для виноробень без власного міжнародного sales-відділу: ми відкриваємо доступ до перспективних ринків вина, напряму зв'язуємо з перевіреними імпортерами й супроводжуємо зростання експорту від початку до кінця. **(CLAUDE.md, «Опис продукту»; jtbd.md, Main job)**» | «Для виноробень без власного міжнародного sales-відділу: ми відкриваємо доступ до перспективних ринків вина, напряму зв'язуємо з перевіреними імпортерами й супроводжуємо зростання експорту від початку до кінця.» | Внутрішня примітка-джерело в тексті для користувача — `voice.md`, Заборонене, найближче до «мова системи» |
| `home.funnel.disclaimer` | «**[?]** Реальні цифри не підтверджені **ресерчем**. research.md, ВИСНОВОК 2: невідомо, чи має VH Selection вже готові конкретні цифри довіри. Нижче — формат для **вайрфрейму**, не реальні дані:» | «Точні цифри зараз не підтверджені.» | «Ресерч» і «вайрфрейм» — слова процесу розробки, не продукту; сама непідтвердженість цифр лишилась чесно сказаною. Значення `[?] N`/`[?] X%` у таблиці нижче — не чіпала, це не текст, а незаповнені дані |
| `home.audience.wineries-body` | «…які хочуть почати експорт, вийти на нові ринки, **шукають представника на закордонних виставках або пошук імпортера** — без власного міжнародного sales-відділу…» | «…які хочуть почати експорт або вийти на нові ринки, не мають власного міжнародного sales-відділу й шукають представника на закордонних виставках чи імпортера…» | Збій узгодження (дієслово + іменник в одному переліку) від прямого перенесення пунктів `CLAUDE.md` у речення; факти не змінені |
| `home.testimonial.empty-message` | «**Порожній стан:** блок довіри без прикладу. Ще немає опублікованого **named**-відгуку від партнера.» | «Ще немає опублікованого відгуку від партнера.» | «Порожній стан:» — ярлик стану, як його називає система/wireframe, не людина; «named-» — внутрішній термін ресерчу (`research.md`, МАРКЕТИНГ), не слово продукту. Слово «партнер» — зі словника |
| `home.criteria.empty-message` | «**Порожній стан: лише загальні слова без критеріїв.** «Ми співпрацюємо лише з перевіреними партнерами.»» | «Детальні критерії ще не опубліковані. Ми співпрацюємо лише з перевіреними партнерами.» | Перше речення було буквально скопійоване з вузла `flows.md` (Flow 3, F) — мова flow-діаграми, не звернення до людини |
| `home.criteria.error-message` | «**Помилка: блок довіри не показано.** Не вдалося завантажити чекліст критеріїв відбору.» | «**Помилка:** не вдалося завантажити чекліст критеріїв відбору.» | Перше речення називало внутрішню назву ЧУЖОЇ зони («блок довіри» — зона відгуку, не критеріїв) — залишок копіювання з `flows.md`, вузол C; друге речення вже було точним і лишилось |

Не змінено (і чому): `home.hero.title`, `home.audience.*-heading`,
`common.*` (шапка, нав, підвал, кнопки «Спробувати ще раз»/«Почати
розмову», чекліст критеріїв) — уже відповідали `voice.md`.
`home.funnel.row-*` (значення `[?] N`/`[?] X%`) і
`home.testimonial.quote`/`attribution` — не текст-голос, а дані
(заглушка й зовнішні дані відповідно), voice.md на них не поширюється.

## Крок 03 — переписано за voice.md (решта екранів)

Три субагенти — по одному на екран (Контактна форма, Список
виноробень, Картка виноробні), кожному передано правила `voice.md` і
`home.html` (уже переписаний на кроці 02) як зразок. Зовнішні дані й
структуру не чіпали. Після зведення я сама виправила один спільний
рядок (`common.footer.description`), який не чіпав жоден субагент, бо
він `common` — у живому HTML він ще мав внутрішню примітку-джерело,
якої інвентар уже не фіксував.

| Ключ | Екран | Зона | Було | Стало |
|---|---|---|---|---|
| `contact.form.intro` | contact | контактна форма | «Розкажіть, хто ви і що шукаєте, — ми відповімо релевантно саме вашій ситуації **(jtbd.md, job R4: «бути одразу зрозумілою у своїй ролі»)**.» | «Розкажіть, хто ви і що шукаєте, — ми відповімо релевантно саме вашій ситуації.» |
| `contact.success.next-steps` | contact-success | контактна форма, успіх | «Далі: куратор VH Selection зв'яжеться з вами особисто — поза сайтом **(flows.md, Flow 1, вузол N → O)**.» | «Далі: куратор VH Selection зв'яжеться з вами особисто — поза сайтом.» |
| `catalog.intro` | catalog | фільтри каталогу | «Звузьте вибір до реально підходящих партнерів — за регіоном, сортом і сертифікатами **(jtbd.md, job R1)**.» | «Звузьте вибір до реально підходящих партнерів — за регіоном, сортом і сертифікатами.» |
| `catalog.empty.cold-start` | catalog-empty | порожній стан: каталог ще порожній | «**Порожній стан:** каталог ще порожній. Жодної **виноробні-партнера** ще не опубліковано.» | «Ще жодного партнера не опубліковано в каталозі.» |
| `catalog.empty.no-results` | catalog-empty | порожній стан: фільтри без результату | «**Порожній стан:** немає виноробень за цими фільтрами. Жодна виноробня в каталозі не відповідає обраному поєднанню.» | «Немає виноробень за цими фільтрами. Жодна виноробня в каталозі не відповідає обраному поєднанню.» |
| `catalog.empty.broaden-filters` | catalog-empty | порожній стан: фільтри без результату | «**Пробує** ширші фільтри →» | «Спробувати ширші фільтри» |
| `winery.decision.back-to-list` | winery | рішення: критерії й відгуки переконують? | «Ні, не переконують — **повертається** до списку виноробень.» | «Ще не впевнені? **Повернутися** до списку виноробень.» |
| `winery.error.message` | winery-error | помилка: картку не вдалось відкрити | «**Помилка: картку не вдалось відкрити.** Не вдалося завантажити деталі цієї виноробні.» | «Помилка: не вдалося завантажити деталі цієї виноробні.» |
| `common.footer.description` | common (усі 15 файлів) | підвал | «…виробників вина середнього масштабу **(CLAUDE.md, «Опис продукту»)**.» | «…виробників вина середнього масштабу.» |

Перевірено й лишено без змін (субагенти підтвердили відповідність
`voice.md`): `contact.form.title`, усі підписи й помилки валідації
полів форми, `contact.form.submit`, `contact.loading.submitting-label`,
`contact.success.title`/`confirmation`, `catalog.title`, усі підписи й
значення фільтрів, заголовки колонок таблиці, `catalog.error.message`,
`winery.wines.title`/колонки, `winery-error.html`'s
`winery.error.back-to-list` (уже був інфінітивом), увесь
`winery-loading.html`. Зовнішні дані (назви виноробень, регіони,
сертифікати, відгуки, зразкові дані заявки Giulia Conti) — не
торкались жоден субагент.

### Звірка: та сама дія — одна назва на всіх екранах

| Дія | Де вживається | Назва скрізь однакова? |
|---|---|---|
| Почати розмову (перехід на контактну форму) | `home.html` (хіро), `home-empty.html` (відновлення), `winery.html` (рішення) | **Так** — «Почати розмову» скрізь; стрілка «→» є на `home.html`/`winery.html` і відсутня на `home-empty.html`, але це декоративний елемент, не слово (voice.md, Словник) |
| Спробувати ще раз (повтор після помилки) | `home-error.html`, `contact-error.html` (сервіс недоступний), `catalog-error.html`, `winery-error.html` | **Так** — «Спробувати ще раз» буквально однаково на всіх чотирьох |
| Надіслати заявку (відправити форму) | `contact.html`, `contact-error.html` (невалідні поля, повторне надсилання) | **Так** — «Надіслати заявку» однаково на обох |
| Спробувати ширші фільтри | `catalog-empty.html` | Єдиний екран з цією дією — порівняння нема з чим, назва відповідає конвенції зі «Словника» |
| Повернутися до списку виноробень | `winery.html` (рішення), `winery-error.html` (помилка) | **Так, після виправлення** — обидва тепер «Повернутися/повернутися до списку виноробень» (різниться лише великою літерою через позицію в реченні, не словом) |

**Розбіжностей не лишилось** — усі знайдені на кроці 01 й у цьому
кроці розбіжності виправлено до зведення; таблиця вище підтверджує
це, а не шукає нових.

## Крок 04 — виправлено за таблицею дефектів (прискіпливою перевіркою)

Прискіплива перевірка всіх 15 файлів проти `voice.md` і цього
інвентаря дала 5 дефектів — виправлено всі, найважливіший першим.

| Пріоритет | Дефект | Виправлення |
|---|---|---|
| 1 | `catalog-empty.html`, порожній стан «каталог ще порожній» — називав причину, але не давав дії в реальному тексті (voice.md, Мікрокопі → «Порожній стан») | Додано реальне посилання «Почати розмову» (новий ключ `catalog.empty.cold-start-recovery`) |
| 2 | `home-empty.html` — дія «Почати розмову» для обох порожніх зон лежала лише в `.zone-action`, який інвентар сам виключає зі свого обсягу; для однієї зони (named-відгук) це вже мало ключ, для іншої (критерії) — ні | Обидва посилання перенесено з `.zone-action` у звичайний `<p>`; додано ключ `home.criteria.empty-recovery`, аналогічний уже наявному `home.testimonial.empty-recovery` |
| 3 | `winery-error.html`/`winery-loading.html`, `<h1>Картка виноробні</h1>` — рядок на екрані без ключа | Додано ключ `winery.generic.title` (HTML не змінювали — рядок уже був правильний) |
| 4 | Футер `home.html` (+3 стани) — «Facebook»/«Instagram»/«LinkedIn» без ключів | Додано `home.footer.social-facebook/-instagram/-linkedin` (HTML не змінювали) |

Пріоритети 3–4 — суто прогалини в інвентарі, HTML не редагувався.
Пріоритети 1–2 — реальна правка тексту+розмітки (новий `<p>` замість
посилання, похованого в `.zone-action`), і тому, за правилом цього
кроку, новий робочий принцип зафіксовано в `CLAUDE.md`: дія виходу з
порожнього/помилкового стану завжди дублюється в реальному тексті, а
не лише в `.zone-action`.

## Крок 05 — виправлено невідповідність зони (за живим відгуком користувача)

Користувач помітив наживо: на `home-error.html`/`home-loading.html`
зона «Блок довіри: named-відгук» завжди показувала повний текст, без
жодної різниці зі станом — а помилку/завантаження натомість показував
сусідній чекліст критеріїв. Причина — `flows.md`, Flow 3, вузли `A1`
("Завантаження: блок довіри") і `C` ("Помилка: блок довіри не
показано") буквально називають зону **блоку довіри**, а не чеклісту;
`sitemap.md` → «Стани» цитує ці самі вузли для Головного. Невідповідність
існувала ще до роботи над голосом — перенесла стан на правильну зону,
як і попросив користувач.

| Ключ | Було | Стало |
|---|---|---|
| `home.criteria.error-message` (видалено) → `home.testimonial.error-message` (новий) | Помилка показувалась у зоні чекліста: «Помилка: не вдалося завантажити чекліст критеріїв відбору.» | Помилка тепер у зоні блоку довіри: «Помилка: не вдалося завантажити блок довіри.» Чекліст на цій сторінці показує звичайний вміст (`common.criteria.*`) |
| `home.criteria.error-support-link` (видалено) → `home.testimonial.error-support-link` (новий) | «напишіть нам через контактну форму» в зоні чекліста | Той самий текст, тепер у зоні блоку довіри |
| (без ключа — зона завжди мала однаковий вигляд) | `home-loading.html`: зона відгуку завжди показувала повну цитату; `common.loading.label` стояв у зоні чекліста | Зона відгуку тепер показує `common.loading.label` («Завантаження…») і заглушки; чекліст на цій сторінці показує звичайний вміст |

`home.testimonial.quote`/`attribution` (зовнішні дані) і
`home.testimonial.empty-message`/`empty-recovery` (стан «порожній»,
Flow 1 вузол C — інший вузол, інша причина) не чіпала: порожній стан
для блоку довіри вже був на своєму місці й не плутався з чеклістом.

## Крок 06 — переглянуто: Головний завантажується й ламається цілком

Користувач справедливо зауважив: Головний — одна сторінка без
власного бекенду; нелогічно, щоб один її блок «не завантажився», поки
решта рендериться як завжди. Рішення, прийняте на кроці 05 (стан —
властивість окремого блоку), замінено на простіше: стан завантаження
й помилки — властивість усієї сторінки. `flows.md` (Flow 3, вузли
A1/B/C) і `sitemap.md` → «Стани» оновлено разом із HTML.

| Що | Було (крок 05) | Стало (крок 06) |
|---|---|---|
| `home-loading.html` | 5 окремих зон; скелетони лише в зоні блоку довіри, решта (хіро, воронка, аудиторія, чекліст) — звичайний вигляд | 1 зона на всю сторінку: `common.loading.label` («Завантаження…») + скелетони; решти зон на сторінці взагалі немає |
| `home-error.html` | 5 окремих зон; помилка лише в зоні блоку довіри | 1 зона на всю сторінку: `home.error.message` + `common.actions.retry` + `home.error.support-link`; решти зон немає |
| Футер | — | Лишається видимим на обох сторінках: це каркас сторінки (як шапка й навігація), не вміст, що завантажується |

**Ключі, що більше не застосовуються на `home-error.html`/
`home-loading.html`** (бо цих зон там більше немає, хоча самі ключі
лишаються дійсними для `home.html`/`home-empty.html`, де ці зони є):
`home.hero.title`, `home.hero.body`, `common.actions.start-conversation`
(хіро-варіант), `home.funnel.*`, `home.audience.*`,
`common.criteria.*`. Видалено (замінено на кроці 06):
`home.testimonial.error-message`, `home.testimonial.error-support-link`
(крок 05).

## Крок 07 — коротші речення (за живим зауваженням «текст занадто офіційний»)

Ключі не змінено. `voice.md`, новий розділ «Довжина речень» —
правило: одна дія, одне речення. Пройдено всі 15 файлів; довгі речення
з кількома дієсловами підряд знайдено лише на двох екранах
(Контактна форма, Каталог) і на Головному — решта екранів (Картка
виноробні, усі стани помилки/завантаження/успіху) вже написані
короткими реченнями, нічого міняти не було.

| Ключ | Було | Стало |
|---|---|---|
| `home.hero.body` | «…ми відкриваємо доступ до перспективних ринків вина, напряму зв'язуємо з перевіреними імпортерами й супроводжуємо зростання експорту від початку до кінця.» (одне речення, 3 дієслова) | «Ми відкриваємо доступ до перспективних ринків вина й напряму зв'язуємо з перевіреними імпортерами. Супроводжуємо зростання експорту від початку до кінця.» (2 речення) |
| `home.audience.wineries-body` | «…які хочуть почати експорт або вийти на нові ринки, не мають власного міжнародного sales-відділу й шукають представника на закордонних виставках чи імпортера.» | «Сімейним і середнім виноробням: хочуть почати експорт або вийти на нові ринки, не мають власного міжнародного sales-відділу, шукають представника на закордонних виставках чи імпортера.» (той самий зміст, через двокрапку-перелік замість ланцюжка «і…й…чи») |
| `contact.form.intro` | «Розкажіть, хто ви і що шукаєте, — ми відповімо релевантно саме вашій ситуації.» | «Розкажіть, хто ви і що шукаєте. Ми відповімо релевантно саме вашій ситуації.» (2 речення) |
| `catalog.intro` | «Звузьте вибір до реально підходящих партнерів — за регіоном, сортом і сертифікатами.» | «Звузьте вибір до реально підходящих партнерів. За регіоном, сортом і сертифікатами.» (2 речення) |

Жодного нового факту не додано — лише межі речень. Зовнішні дані й
структуру не чіпала.

## Крок 08 — переклад інтерфейсу на англійську

За зауваженням користувача: усі вайрфрейми лишались українською, хоча
`research.md`, ВИСНОВОК 6, ще раніше зафіксував, що сайт стартує
англійською. Переклала весь реальний текст інтерфейсу (заголовки,
кнопки, підписи полів, повідомлення станів, зовнішні описові слова на
кшталт «тихі, червоні» → «still, red») у всіх 15 файлах — колонка
«Рядок» у таблиці вище тепер відповідає живому HTML. `<html lang="uk">`
→ `lang="en"`, `<title>` теж перекладено.

**Що НЕ перекладено, свідомо:**
- Власні назви й зовнішні дані без зміни значення: «Tenuta Conti
  Rosso», «Château Vallière», «Giulia Conti», «giulia@contirosso.it»,
  коди сертифікатів DOCG/DOC/AOC, сорти винограду (Sangiovese тощо).
- `.zone-label`, `.zone-action`, навігатор станів, верхній HTML-
  коментар кожного файлу — інструментарій курсу (voice.md, «Мова
  продукту: англійська»), не текст продукту.
- Увесь документаційний шар — цей файл (крім колонки «Рядок»),
  `voice.md`, `sitemap.md`, `flows.md`, `personas.md`, `research.md`,
  `CLAUDE.md` — лишається українською: це робочі матеріали курсу.

`voice.md`, Словник — доповнено англійськими відповідниками для
кожного терміна й назви дії (розділ «Мова продукту: англійська»),
щоб переклад тримався того самого єдиного слова на всіх екранах, що
й україномовна версія раніше.
