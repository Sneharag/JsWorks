

var str1="PQRST"

var str2="ABC"

// PAQBRCST

var smallestString=str1.length<str2.length?str1:str2

var largestString=str1.length>str2.length?str1:str2

var result=""

for(let i=0;i<smallestString.length;i++){

    result+=str1[i]+str2[i]
}
console.log(result)


var balance=""

if(str1.length != str2.length){

    balance=largestString.slice(smallestString.length,)
}
result+=balance
console.log(result)



