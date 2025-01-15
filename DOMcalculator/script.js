
function addNumbers(event) {

    let num1=document.querySelector("#box1").value

    let num2=document.querySelector("#box2").value

    let result=0

    if(event.target.value=="+"){

        result=(+num1)+(+num2)

    }
    if(event.target.value=="-"){

        result=(+num1)-(+num2)

    }
    if(event.target.value=="*"){

        result=(+num1)*(+num2)
    }

    document.querySelector("#root").innerHTML=`<h1>${result}</h1>`

}

// function subtractNumbers() {

//     let num1=document.querySelector("#box1").value

//     let num2=document.querySelector("#box2").value

//     var result=Number(num1)-Number(num2)

//     document.querySelector("#root").innerHTML=`<h1>${result}</h1>`
    
    
// }
