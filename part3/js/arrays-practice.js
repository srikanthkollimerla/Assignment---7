//STEP 1
var favMovies = ["Speed", "The Unstoppable", "The men in high castle", "Joker", "Spider Man"];
console.log(favMovies[1]);


//STEP 2
var movies = new Array(5);
for (var i = 0; i < favMovies.length; i++) {
    movies[i] = favMovies[i];
}
console.log(movies[0]);


//STEP 3
movies.splice(2, 0, "Transformers");
console.log(movies.length);


//STEP 4
var movies = [];
for (var i = 0; i < favMovies.length; i++) {
    movies.push(favMovies[i]);
}
delete movies[0];
console.log(movies);


//STEP 5
var favMovies = ["Speed", "The Unstoppable", "The men in high castle", "Joker", "Spider Man", "Interstellar", "Parasite"];
var movies = [];


for (var i = 0; i < favMovies.length; i++) {
    movies.push(favMovies[i]);
}


for (var j = 0; j < movies.length; j++) {
    console.log(movies[j]);
}


//STEP 6
for (index in movies) {
    console.log(movies[index]);
}


//STEP 7
var sortedMovies = movies.sort();
for (index in sortedMovies) {
    console.log(sortedMovies[index]);
}


//STEP 8
var leastFavMovies = ["The ring", "Annabelle", "James Bond"];
var favMovies = movies;

console.log("\nMovies I like:\n\n" + favMovies.join("\n") +
            "\n\nMovies I regret watching:\n\n" + leastFavMovies.join("\n") + "\n\n");

//STEP 9
var movies = favMovies.concat(leastFavMovies);
var reverseSort = movies.sort().reverse();

console.log(reverseSort.join("\n"));

//STEP 10
console.log(reverseSort.pop());