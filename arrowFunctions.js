// arrow functn do not hoist because it doesn't use function keyword

// (param1,param2,...)=>expression

// (param1,param....)=>{
        //stmt1
        // stmnt2 
        // return value
// }

var cube=(num)=>num**3
console.log(cube(4))

var addNumbers=(num1,num2)=>num1+num2
console.log(addNumbers(100,200))

var maxTwo=(num1,num2)=>num1>num2?num1:num2
console.log(maxTwo(10,20));

var minTwo=(num1,num2)=>num1<num2?num1:num2
console.log(minTwo(10,20));


