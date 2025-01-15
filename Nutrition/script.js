// api key    X2Ww9iyjUcgk7IH/ZsfNfg==gwsxTq9fRayHdofU

async function fetchProductDetail(event){

    event.preventDefault()

    let itemName=document.querySelector("#item-box").value

    let response = await fetch(`https://api.api-ninjas.com/v1/nutrition?query=${itemName}`, 
                        {
                            headers: {
                                'X-Api-Key': 'X2Ww9iyjUcgk7IH/ZsfNfg==gwsxTq9fRayHdofU' 
                            }
                        })

    let data= await response.json()

    displayProduct(data)
    
}

function displayProduct(data){

    let htmlData=""

    for(let i of data){

        htmlData+=`
        <div>
            <h3>${i.name}</h3>
            <p>Calories: ${i.calories}</p>
            <p>Fat: ${i.fat_total_g}g</p>
            <p>Potassium: ${i.potassium_mg}g</p>
            <p>Cholestrol: ${i.cholesterol_mg}g</p>
            <p>Carbohydrates: ${i.carbohydrates_total_g}g</p>
            <a href="#" class="btn btn-primary">More Details</a>
        </div>
        `
    }

    document.querySelector("#data").innerHTML=htmlData

}


