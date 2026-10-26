// Дерево сторінок репозиторію.
// Формат: масив гілок { branch, pages }.
// Сторінка: { title, path, children? } — path відносний від кореня репозиторію.
// У дереві лише сторінки, які вже існують; гілка з'являється
// в дереві разом зі своєю першою сторінкою.
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
  }
];
