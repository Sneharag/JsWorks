
const movies = [
    {
      title: "Drishyam",
      year: 2013,
      runtime: 160,
      genre: ["Drama", "Thriller"],
      rating: 8.4
    },
    {
      title: "Premam",
      year: 2015,
      runtime: 156,
      genre: ["Romance", "Comedy"],
      rating: 8.3
    },
    {
      title: "Bangalore Days",
      year: 2014,
      runtime: 171,
      genre: ["Romance", "Drama", "Comedy"],
      rating: 8.3
    },
    {
      title: "Kumbalangi Nights",
      year: 2019,
      runtime: 135,
      genre: ["Drama", "Comedy"],
      rating: 8.6
    },
    {
      title: "Uyare",
      year: 2019,
      runtime: 125,
      genre: ["Drama", "Thriller"],
      rating: 8.1
    },
    {
      title: "Maheshinte Prathikaaram",
      year: 2016,
      runtime: 120,
      genre: ["Comedy", "Drama"],
      rating: 8.3
    },
    {
      title: "Take Off",
      year: 2017,
      runtime: 139,
      genre: ["Drama", "Thriller"],
      rating: 8.3
    },
    {
      title: "Eeda",
      year: 2018,
      runtime: 152,
      genre: ["Romance", "Drama"],
      rating: 7.7
    },
    {
      title: "Thondimuthalum Driksakshiyum",
      year: 2017,
      runtime: 135,
      genre: ["Drama", "Crime"],
      rating: 8.2
    },
    {
      title: "Angamaly Diaries",
      year: 2017,
      runtime: 132,
      genre: ["Action", "Drama"],
      rating: 8.1
    }
  ];

// q1 total number of movies
console.log(movies.length);

// q2 drama movies
// movies.filter(m=>m.genre.includes("Drama")).forEach(m=>console.log(m.title))

// q3 top rated movies
var topRated=movies.reduce((m1,m2)=>m1.rating>m2.rating ? m1 : m2)
// console.log(topRated);


// q4 movie with longest runtime
var longRuntime=movies.reduce((m1,m2)=>m1.runtime>m2.runtime ? m1 : m2)
// console.log(longRuntime);


// q5 sort movies wrt year
movies.sort((m1,m2)=>m1.year -m2.year) //ascending
// console.log(movies);


// q5 year movie with name Angamaly Diaries
var movie = movies.find(m => m.title == "Angamaly Diaries");
// console.log(movie.year)


// q6 group movies wrt year {2017:2,2018:1,}
var yc={}
movies.forEach(m=>m.year in yc?yc[m.year]+=1:yc[m.year]=1)
// console.log(yc);

// q7 movies with genre Action or Crime
var actionCrimeMoves=movies.filter(m=>m.genre.includes("Crime")||m.genre.includes("Action"))
console.log(actionCrimeMoves);


// q8 in which year most number of movies released
// to convert an object to array => Object.entries(objectname)
var yearwithmostMovies=Object.entries(yc).reduce((a1,a2)=>a1[1]>a2[1]?a1:a2)   //[['2013' : 1].....] 1st index gives the count
console.log(yearwithmostMovies);


