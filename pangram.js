
var text="The quick brown fox jumps over the lazy dog".toLowerCase()

var alphabets="abcdefghijklmnopqrstuvwxyz"

var isPangram=true

for(let ch of alphabets){

    if(!text.includes(ch)){

        isPangram=false

    }
}
console.log(isPangram)


// of => gives its characters

// in => gives its index
