import products from "./models/products.js";
import { fechData } from "./utils/httpReq.js";



const productsNode=document.getElementById("products");

async function render() {
  //console.log("load");
  const productsData =await fechData();
  //console.log(productsData);
  const productsInstance=new products(productsNode,productsData);
  // console.log(productsInstance)
  productsInstance.showproducts();
}

document.addEventListener("DOMContentLoaded", render);
