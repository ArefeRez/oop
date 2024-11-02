import Cart from "./models/cart.js";
import products from "./models/products.js";
import { fechData } from "./utils/httpReq.js";



const productsNode=document.getElementById("products");
const cartListNode=document.getElementById("cart-list");
const totalPreisNode=document.getElementById("total-price").querySelector("span");

async function render() {
  //console.log("load");
  const productsData =await fechData();
  //console.log(productsData);
  const productsInstance=new products(productsNode,productsData);
  const CartInstance=new Cart(cartListNode,totalPreisNode);
  // console.log(CartInstance);
  // console.log(productsInstance)
  productsInstance.showproducts();
}

document.addEventListener("DOMContentLoaded", render);
