
var arr=[10,11,13,14,15]

// map() => all objects
// filter() => filtering objects
// reduce() => max min sum product , single result
// sort() 
// splice(index,deleteCount,object)

// object.length
console.log("index");
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// in => index
console.log("in keyword");
for (let i in arr) {
    console.log(arr[i]);
}

// of => object
console.log("of keyword");
for (let num of arr) {
    console.log(num);       
}

// splice
arr.splice(2,0,12)
console.log(arr);


// map
var addFive=arr.map((num)=>num+5)
console.log(addFive);

var cubes=arr.map((num)=> num**3)
console.log(cubes);

// filter
var oddNumber=arr.filter((num)=>num%2!=0)
console.log(oddNumber);


// numGtEleven

var numGtEleven=arr.filter((num)=>num>11)
console.log(numGtEleven);

// reduce max min sum product
var total=arr.reduce((n1,n2)=>n1+n2)
console.log(total);

var product=arr.reduce((n1,n2)=>n1*n2)
console.log(product);

var maxNumber=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(maxNumber);

var minNumber=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(minNumber);

// sort
arr.sort((num1,num2)=>num1-num2) //f num1<num2 return num1,num2 = ascending
console.log(arr);

arr.sort((num1,num2)=>num2-num1) //if num1<num2 return num2,num1 = descending
console.log(arr);




