class products {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
  }

showproducts(){
  this.products.forEach(product=>this.createdCard(product))
}
createdCard(data){
  const cardEle=document.createElement("div");
  const img=this.productImg
  const info=document.createElement("div");
  const productName=document.createElement("h3");
  const control=document.createElement("div");
  const price=document.createElement("span");
  const button=document.createElement("button");
  productName.innerText=data.name;
  price.innerText=data.price;
  button.innerText="+"
  control.append(price,button);
  info.append(productName,control);
  

  cardEle.appendChild(info);


  this.parent.appendChild(cardEle);

}

productImg(data){
  const img=document.createElement("img");
  img.src=data.image;
  img.alt=data.alt;
  return img;
}

}

export default products;
