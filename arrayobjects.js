

var farmeWorks=[

    {id:1,name:"django",langauge:"python",rating:5},
    {id:2,name:"fastapi",langauge:"python",rating:4},
    {id:3,name:".net",langauge:"c#",rating:5},
    {id:4,name:"spring",langauge:"java",rating:5},
    {id:5,name:"express",langauge:"javascript",rating:5},
    {id:6,name:"angular",langauge:"typescript",rating:5},
]

// find
var djangoDetail=farmeWorks.find(f=>f.name=="django")
console.log(djangoDetail);


// total no of objects
console.log(farmeWorks.length);

// display all framework names
var frameWorkNames=farmeWorks.map((f)=>f.name)
// console.log(frameWorkNames);

// print all languages
var allLanguages=farmeWorks.map(f=>f.langauge)
// console.log(allLanguages);

// forEach() not returning any value
// farmeWorks.forEach(f=>console.log(f.name))

// display python framework names
// farmeWorks.filter(f=>f.langauge=="python").forEach(f=>console.log(f.name))

// rating > 4
// farmeWorks.filter(f=>f.rating>4).forEach(f=>console.log(f.name))

// top rated framework
var topRated=farmeWorks.reduce((f1,f2)=>f1.rating>f2.rating ? f1 : f2)
var topRatedFws=farmeWorks.filter(f=>f.rating == topRated.rating)
// console.log(topRatedFws);

// sort wrt rating
farmeWorks.sort((f1,f2)=>f1.rating -f2.rating) //ascending
// console.log(farmeWorks);




