
function displayNumber(event) {

    // document.querySelector("#result").value+=event.target.value

    result.value+=event.target.value
    
}

function clearBox() {

    // document.querySelector("#result").value=""

    result.value=""
    
}

function evaluateExpression() {

    let currentExpression=result.value

    let output=eval(currentExpression)

    result.value=output
    
}

function backSpace(){

    let currentExpression=result.value

    let output=currentExpression.slice(0,-1)

    result.value=output

}



