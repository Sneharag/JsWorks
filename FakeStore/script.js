// fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>displayProducts(data))
// promise chaining

fetchAllProducts()

async function fetchAllProducts(){

    let response = await fetch("https://fakestoreapi.com/products")

    let data = await response.json()

    displayProducts(data)
    
}

function displayProducts(data){

    let htmlData=""

    for(let p of data){

        htmlData+=`
         <div class="col-4">

            <div class="card mt-3 p-4" style="width: 80%;height:600px">
                <img src="${p.image}" class="card-img-top" alt="..." style="height:300px">
                <div class="card-body">
                    <h5 class="card-title">${p.title}</h5>
                    <p class="card-text">${p.description.slice(0,50)}</p>
                    <p class="card-text">${p.price}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>

         </div>
        
        `
    }

    document.querySelector("#root").innerHTML=htmlData
}
