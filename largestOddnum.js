// 742  7
// 7492 749
// 16243  16243


var num=16243

while (num!=0) {
    
    let digit=num%10 

    if(digit%2!=0){

        console.log(num); 
        break
        
    }

    num=Math.floor(num/10) 
}


