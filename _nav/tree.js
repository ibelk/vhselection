// Дерево сторінок репозиторію.
// Формат: масив гілок { branch, pages }.
// Сторінка: { title, path, children? } — path відносний від кореня репозиторію.
// path можна не вказувати для чистого розділу-групи (напр. групи
// екранів зі sitemap.md) — тоді пункт рендериться як підпис без
// посилання, а власні сторінки лежать у children.
// У дереві лише сторінки, які вже існують; гілка з'являється
// в дереві разом зі своєю першою сторінкою, розділ групи — разом зі
// своїм першим екраном.
window.NAV_TREE = [
  {
    branch: "Продукт",
    pages: [
      { title: "Головна", path: "index.html" }
    ]
  },
  {
    branch: "Ресерч",
    pages: [
      { title: "Дослідження", path: "research/research.html" }
    ]
  },
  {
    branch: "Персони",
    pages: [
      { title: "Персони та Jobs to be Done", path: "personas.html" }
    ]
  },
  {
    branch: "Структура",
    pages: [
      { title: "IA: sitemap, flows, трасування", path: "ia.html" }
    ]
  },
  {
    branch: "Екрани",
    pages: [
      {
        title: "Вхід",
        children: [
          { title: "Головний", path: "wireframes/home.html" },
          { title: "Головний — порожній", path: "wireframes/home-empty.html" },
          { title: "Головний — помилка", path: "wireframes/home-error.html" },
          { title: "Головний — завантаження", path: "wireframes/home-loading.html" }
        ]
      },
      {
        title: "Контакт",
        children: [
          { title: "Контактна форма", path: "wireframes/contact.html" },
          { title: "Контактна форма — помилка", path: "wireframes/contact-error.html" },
          { title: "Контактна форма — завантаження", path: "wireframes/contact-loading.html" },
          { title: "Контактна форма — успіх", path: "wireframes/contact-success.html" }
        ]
      },
      {
        title: "Каталог",
        children: [
          { title: "Список виноробень", path: "wireframes/catalog.html" },
          { title: "Список виноробень — порожній", path: "wireframes/catalog-empty.html" },
          { title: "Список виноробень — помилка", path: "wireframes/catalog-error.html" },
          { title: "Список виноробень — завантаження", path: "wireframes/catalog-loading.html" },
          { title: "Картка виноробні", path: "wireframes/winery.html" },
          { title: "Картка виноробні — помилка", path: "wireframes/winery-error.html" },
          { title: "Картка виноробні — завантаження", path: "wireframes/winery-loading.html" }
        ]
      }
    ]
  }
];
