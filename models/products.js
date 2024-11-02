class products {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
    this.parent.addEvnetListener("click",this)
  }

showproducts(){
  this.products.forEach(product=>this.createdCard(product))
}
createdCard(data){
  const cardEle=document.createElement("div");
  const imgEle=this.productImg;
  const infoEle=this.productInfo;
  cardEle.innerHTML=imgEle;
  cardEle.innerHTML+=infoEle;
  // const info=document.createElement("div");
  // const productName=document.createElement("h3");
  // const control=document.createElement("div");
  // const price=document.createElement("span");
  // const button=document.createElement("button");
  // productName.innerText=data.name;
  // price.innerText=data.price;
  // button.innerText="+"
  // control.append(price,button);
  // info.append(productName,control);
  

  // cardEle.appendChild(info);


  this.parent.appendChild(cardEle);

}

productImg(data){
  const { image , alt }=data;
  // const img=document.createElement("img");
  // img.src=data.image;
  // img.alt=data.alt;
  const img = `img alt=${alt} src=${image}`;
  return img;
}
productInfo(data){
  const {name,id,price}=data;
  const infoJSX=`
  <div id="product-info">
  <h3>${name}</h3>
  <div>
  <span>${price}</span>
  <bottun data-id=${id}>+</bottun>
  </div>
  </div>
  `;
  return infoJSX;
}

handleEvent(event){
  // console.log("click");
  const element= event.target;
  console.log(element.tagName);
  if(element.tagName==="BUTTON"){
    this.addToCart(element.dataset.id)
    } 

}
addToCart(id){
  console.log(id);
}
}

export default products;
