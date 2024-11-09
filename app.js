import { fechData } from "./utils/httpReq.js";
import products from "./models/products.js";
import Cart from "./models/cart.js";

const productsNode = document.getElementById("products");
const cartListNode = document.getElementById("cart-list");
const totalPriceNode = document
  .getElementById("total-price")
  .querySelector("span");

async function render() {
  //console.log("load");
  const productsData = await fechData();
  //console.log(productsData);
  const cartInstance = new Cart(cartListNode, totalPriceNode);
  const productInstance = new products(productsNode, productsData,cartInstance);
  console.log(cartInstance);
  // console.log(productInstance);
  productInstance.showProducts();
}

document.addEventListener("DOMContentLoaded", render);
