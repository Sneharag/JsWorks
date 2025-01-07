
var weight=48

var heightincm=160

var heightinm=heightincm/100

var bmi=weight/heightinm**2

console.log(`bmi : ${bmi}`);

if(bmi<=19){

    console.log("Under weight");
    
}
else if(bmi<=25){

    console.log("Normal weight");
    
}
else if(bmi<=30){

    console.log("Over weight");
    
}
else{

    console.log("Obesity");
    
}


