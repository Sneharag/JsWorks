// word count
var text="python programming java programming"

var wc={}

// split
var words=text.split(" ")

for(let w of words){

    w in wc? wc[w]+=1 : wc[w]=1
}

console.log(wc);

//        or

var wc={}

var words=text.split(" ").map(w=>w in wc?wc[w]+=1:wc[w]=1)

console.log(wc);

