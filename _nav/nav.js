// Будує бокове меню з window.NAV_TREE (_nav/tree.js) у контейнер
// <div id="repo-nav" data-root="...">. data-root — шлях до кореня
// репо відносно поточної сторінки (напр. "./" або "../../").
// Працює і з диска (file://), і на GitHub Pages, з будь-якої глибини.
(function () {
  var container = document.getElementById("repo-nav");
  if (!container) return;

  var root = container.getAttribute("data-root") || "./";
  var tree = window.NAV_TREE || [];

  function resolveUrl(relPath) {
    return new URL(root + relPath, window.location.href).href;
  }

  var currentUrl = window.location.href.split("#")[0].split("?")[0];

  function renderPages(pages) {
    var list = document.createElement("ul");
    list.className = "nav-list";
    pages.forEach(function (page) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = root + page.path;
      a.textContent = page.title;
      if (resolveUrl(page.path) === currentUrl) {
        a.className = "nav-current";
      }
      li.appendChild(a);
      if (page.children && page.children.length) {
        li.appendChild(renderPages(page.children));
      }
      list.appendChild(li);
    });
    return list;
  }

  var nav = document.createElement("nav");
  tree.forEach(function (branch) {
    var branchEl = document.createElement("div");
    branchEl.className = "nav-branch";

    var title = document.createElement("div");
    title.className = "nav-branch-title";
    title.textContent = branch.branch;
    branchEl.appendChild(title);

    branchEl.appendChild(renderPages(branch.pages));
    nav.appendChild(branchEl);
  });

  container.appendChild(nav);
})();
