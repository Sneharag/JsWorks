// create an object product with attributes code,title,price,qty

var product={
    code:"ab123",
    title:"shoes",
    price:1999,
    qty:2
}

console.log(product.title);

console.log("qty" in product);

// add offer of 1000 if offer attribute not exist else add offer 750 with current offer
if("offer" in product){
    product.offer+=750
}
else{
    product.offer=1000
}
console.log(product);

