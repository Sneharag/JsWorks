// function functionname(param1,param2,,,,paramn){
//      func definition
//      return value
// }

function cube(num) {
    
    return num**3
}

console.log(cube(2));



function add(num1,num2) {

    return num1+num2
}

console.log(add(10,20));



// can call the fnctn before defining it 
// hoisting => function keyword => move the function to the top

function lastDigitMax(num1,num2){

    return num1%10>num2%10? num1 : num2
}
console.log(lastDigitMax(127,872));


function squarenum(num){

    let sum=0
    while(num!=0){
        let digit=num%10
        sum=digit**2+sum
        num=Math.floor(num/10)
    }
        
    return sum
}

function happyNumber(num){


}

    
function isPrime(num) {
        
    if (num < 2){
        return false
    } 
        
    for (let i = 2; i < num; i++) {
            
        if (num % i == 0){
            return false
        } 
        
    }
    return true; 
}  
function nextPrime(num) {
        
    let next = num + 1;  
    while (true) {
            
        if (isPrime(next)){
            return next 
        }  
        next++;   
    }
    
}
console.log(`${nextPrime(10)}`);
    


function isFibonacci(num) {

    let current = 0
    let next = 1
    while (current < num) { //0<8 1<8 1<8 2<8 3<8 5<8 8<8?.

        let temp = current + next; //1 2 3 5 8 13

        current = next; //1 1 2 3 5 8
        
        next = temp; //1 2 3 5 8 13
    }
   return current==num?true:false
}

// Example Usage
console.log(isFibonacci(8));




// nextPrime(num)
// isFibonaccinumber(num) true / false

