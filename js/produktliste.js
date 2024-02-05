fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  /* looper igennem og kalder showProduct (ental) */
  products.forEach(showProduct);
}

function showProduct(product) {
  /* fang template */
  const template = document.querySelector("#smallProductTemplate").content;

  /* lav kopi */
  const copy = template.cloneNode(true);

  /* ændre indhold */
  // copy.querySelector("img").src = product.img;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector("#price span").textContent = product.price;
  copy.querySelector("#brand span").textContent = product.brandname;

  if (product.soldout) {
    /* produktet er udsolgt */
    copy.querySelector("article").classList.add("SoldOut");
  } else {
    copy.querySelector("article").classList.remove("SoldOut");
  }

 if (product.discount) {
    /* produktet er på tilbud */
    copy.querySelector("article").classList.add("discount");
  copy.querySelector("article").classList.add("rabat");
 } else {
  copy.querySelector("article").classList.remove("discount");
 copy.querySelector("article").classList.remove("rabat");
} /* appende */
  document.querySelector("section").appendChild(copy);
}

/* [{"id":1163,
"gender":"Men",
"category":"Apparel",
"subcategory":"Topwear",
"articletype":"Tshirts",
"season":"Summer",
"productionyear":2011,
"usagetype":"Sports",
"productdisplayname":"Sahara Team India Fanwear Round Neck Jersey",
"price":895,
"discount":null,
"brandname":"Nike",
"soldout":0} */
