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
  copy.querySelector(
    ".productImage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  //
  if (product.soldout) {
    /* produktet er udsolgt */
    copy.querySelector("article").classList.add("SoldOut");
    copy.querySelector("article").classList.add("udsolgt");
  } else {
    copy.querySelector("article").classList.remove("SoldOut");
    copy.querySelector("article").classList.remove("udsolgt");
  }

  if (!product.discount) {
    //! betyder not
    /* produktet er på tilbud */
    copy.querySelector(".discount").remove();
    copy.querySelector(".rabat").remove();
  } else {
    copy.querySelector(".rabat .procent").textContent = product.discount + "%";
  }

   /* link til produktside */
   copy.querySelector(".linkTilProdukt").setAttribute("href", `produkt.html?id=${product.id}`)

  /* appende */
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
