//         j
var arr=[1,3,4,4,5,7]
//       0 1 2 3 4 5 6
//       i

// find least missing +ve integer and duplicates


var duplicates=[]

var missing=[]

for (let i=0;i<arr.length-1;i++){

    let j=i+1

    let difference=arr[j]-arr[i]

    if(difference==0){
        
        duplicates.push(arr[i])
        
    }
    if(difference > 1){

        missing.push(arr[i]+1)
    }

}

console.log("missing",missing[0]);

console.log(duplicates);

