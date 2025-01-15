// fetch("https://restcountries.com/v2/all/").then(res=>res.json()).then(data=>displayCountries(data))

fetchAllCountries()

async function fetchAllCountries(){

    let response = await fetch("https://restcountries.com/v2/all/")

    let data = await response.json()

    displayCountries(data)
}

function displayCountries(data){

    let htmlData=""

    for(let c of data){

    htmlData+=`
    <div class="col-4">
          <div class="card mt-3 p-5" style="width: 80%;height:500px">
            <img src="${c.flag}" class="card-img-top" alt="..." style="height:200px">
            <div class="card-body">
                <h5 class="card-title">${c.name}</h5>
                <p class="card-text">Capital : ${c.capital}</p>
                <p class="card-text">Region : ${c.region}</p>
                <p class="card-text">Subregion : ${c.subregion}</p>
                <p class="card-text">Population : ${c.population}</p>
                <a href="#" class="btn btn-primary">Know more</a>
            </div>
          </div>      
    </div>
    
    `
    }

    document.querySelector("#root").innerHTML=htmlData
}

