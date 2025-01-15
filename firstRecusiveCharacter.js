// first recursive character

text="ABCCDDEEF"

var wc={}

for(let ch of text){

    if(ch in wc){
        console.log(ch,"first recursive");
        break
    }
    else{
        wc[ch]=1
    }
}



