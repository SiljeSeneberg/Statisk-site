fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then((data) => showCategories(data));

function showCategories(categories) {
  categories.forEach(showCategory);
}

function showCategory(cat) {
  const template = document.querySelector("#categoryTemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector("h3").textContent = cat.category;

  copy
    .querySelector(".linkTilListe")
    .setAttribute("href", `produktliste.html?category=${cat.category}`);

  document.querySelector("section").appendChild(copy);
}

/*[
{"category":"Accessories"},
{"category":"Apparel"},
{"category":"Footwear"},¢
{"category":"Free Items"},
{"category":"Personal Care"},
{"category":"Sporting Goods"}
]*/
