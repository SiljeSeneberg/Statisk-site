const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  document.querySelector("h3").textContent = product.productdisplayname;
  document.querySelector(
    ".imgProdukt"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".brand span").textContent = product.brandname;
  document.querySelector(".articletype span").textContent = product.articletype;
  document.querySelector(".usagetype span").textContent = product.usagetype;

  if (product.soldout) {
    /* produktet er udsolgt */
    document.querySelector("article").classList.add("SoldOut");
    document.querySelector("article").classList.add("udsolgt");
  } else {
    document.querySelector("article").classList.remove("SoldOut");
    document.querySelector("article").classList.remove("udsolgt");
  }

  if (!product.discount) {
    //! betyder not
    /* produktet er på tilbud */
    doscument.querySelector(".discount").remove();
    document.querySelector(".rabat").remove();
  } else {
    document.querySelector(".rabat .procent").textContent = product.discount + "%";
  }
  }

/* 
id	1165
gender	"Men"
category	"Apparel"
subcategory	"Topwear"
articletype	"Tshirts"
basecolour	"Blue"
season	"Summer"
productionyear	2013
usagetype	"Sports"
productdisplayname	"Mean Team India Cricket Jersey"
parsed	1
soldout	0
relid	1165
price	2495
discount	45
variantname	"Authentic Jersey"
brandname	"Nike"
brandbio	"Nike, creating experiences for today’s athlete"
brandimage	"http://assets.myntassets.com/v1/assets/banners/2015/6/26/1435317851398-23197-3chxv6.jpg"
agegroup	"Adults-Men"
colour1	"NA"
colour2	"NA"
fashiontype	"Fashion"
materialcaredesc	"<p>Polyester<br />Machine wash</p>"
sizefitdesc	null
description	"<p>Blue jersey with a tipped collar, concealed, half buttoned placket, Nike print on the right chest, Team India print and applique on the front, short sleeves, tri-colour side panels, print at the back</p>"
styledesc	"<p>Root for our country in style with this team India jersey from Nike. The Dri-fit fabric and panel" 
*/
