const cartIcon = document.querySelector(".cartIcon");
const cartInfoContainer = document.querySelector(".cartInfoContainer");
const toggler = document.querySelector(".toggler");
const closeIcon = document.querySelector(".closeIcon");
const links = document.querySelector(".links");
const arrowContainer = document.querySelector(".arrowContainer");
const fullProductImage = document.querySelector(".fullProductImage");
const lBfullProductImage = document.querySelector(".lBfullProductImage");
const lightBox = document.querySelector(".lightBox");
const lBcloseIcon = document.querySelector(".lBcloseIcon");
const addButton = document.querySelector(".addButton");
const singleProductContainer = document.querySelector(
  ".singleProductContainer"
);
const cartTextContainer = document.querySelector(".cartTextContainer");
const productAmount = document.querySelector(".productAmount");
const minusIcon = document.querySelector(".minusIcon");
const plusIcon = document.querySelector(".plusIcon");
const costDetail = document.querySelector(".costDetail");
const totalCost = document.querySelector(".totalCost");
const currentPrice = document.querySelector(".currentPrice");
const cartBadge = document.querySelector(".cartBadge");
const deleteIcon = document.querySelector(".deleteIcon");

/* items */

/* show cart */

cartIcon.addEventListener("click", () => {
  if (cartInfoContainer.style.display == "none")
    cartInfoContainer.style.display = "block";
  else cartInfoContainer.style.display = "none";
});
document.querySelector(".productContainer").addEventListener("click", () => {
  cartInfoContainer.style.display = "none";
});

/* show cart */


/* navbar menu */

toggler.addEventListener("click", () => {
  links.style.left = "-15%";
});
closeIcon.addEventListener("click", () => {
  links.style.left = "-80%";
});

/* navbar menu */

/* lightbox */

fullProductImage.addEventListener("click", () => {
  lightBox.style.visibility = "visible";
  lightBox.style.opacity = "1";
});

lBcloseIcon.addEventListener("click", () => {
  lightBox.style.visibility = "hidden";
  lightBox.style.opacity = "0";
});

/* lightbox */

/* change product image */
function changeFunc(thumb) {
  fullProductImage.src = thumb.src;
}

function lBchangeFunc(thumb) {
  lBfullProductImage.src = thumb.src;
}

/* on mobile */

var index = 1;
showImg(index);

function sideSlide(e) {
  showImg((index += e));
}

function showImg(e) {
  var i;
  const img = document.querySelectorAll(".fullProductImage");
  if (e > img.length) {
    index = 1;
  }
  if (e < 1) {
    index = img.length;
  }
  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  img[index - 1].style.display = "block";
}

var lBindex = 1;
showLBImg(lBindex);

function LBsideSlide(e) {
  showLBImg((lBindex += e));
}

function showLBImg(e) {
  var i;
  const lBimg = document.querySelectorAll(".lBfullProductImage");
  if (e > lBimg.length) {
    lBindex = 1;
  }
  if (e < 1) {
    lBindex = lBimg.length;
  }
  for (i = 0; i < lBimg.length; i++) {
    lBimg[i].style.display = "none";
  }
  lBimg[lBindex - 1].style.display = "block";
}

/* change product image */

/* add to cart */

addButton.addEventListener("click", () => {
  if (productAmount.textContent > 0) {
    showCartInfo();
  }
  setLocal();
});

plusIcon.addEventListener("click", () => {
  let amount = parseInt(productAmount.textContent);
  amount += 1;
  productAmount.textContent = amount;
});

minusIcon.addEventListener("click", () => {
  let amount = parseInt(productAmount.textContent);
  if (amount > 0) amount -= 1;
  productAmount.textContent = amount;
});

/* add to cart */

/* delete item */

deleteIcon.addEventListener("click", () => {
  singleProductContainer.style.display = "none";
  cartTextContainer.style.display = "block";
  cartBadge.style.display = "none";
  localStorage.removeItem("addedItems");
  addedAmount = 0;
});

/* delete item */

const showCartInfo = () => {
  cartBadge.style.display = "block";
  if (addedAmount > 0) addedAmount = parseInt(addedAmount);
  addedAmount += parseInt(productAmount.textContent);
  cartBadge.textContent = addedAmount;
  costDetail.textContent = `${currentPrice.textContent} x ${addedAmount}`;
  totalCost.textContent = `$${
    currentPrice.textContent.match(/(\d+)/)[0] * addedAmount
  }`;
  singleProductContainer.style.display = "block";
  cartTextContainer.style.display = "none";
};

/* localStorage */

const setLocal = () => {
  localStorage.setItem("addedItems", addedAmount);
};

let addedAmount = localStorage.getItem("addedItems");

const onRefresh = () => {
  if (addedAmount > 0) {
    cartBadge.style.display = "block";
    cartBadge.textContent = addedAmount;
    costDetail.textContent = `${currentPrice.textContent} x ${addedAmount}`;
    totalCost.textContent = `$${
      currentPrice.textContent.match(/(\d+)/)[0] * addedAmount
    }`;
    singleProductContainer.style.display = "block";
    cartTextContainer.style.display = "none";
  }
};

onRefresh();

/* localStorage */
