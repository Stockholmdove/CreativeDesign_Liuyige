function sayHello(){
  var response = prompt("What is your name?");
  alert("Hello "+response+", have a good day!");
}

function add(a,b){
  return a+b;
}
console.log(add(20,30));
console.log(add(100,30));

function showTopic() {
  var x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
}

var movies = ['Avengers','Captain Marvel','Black Panther','Spiderman'];
movies[0]='Wonder Woman';
movies.push('Avengers');
movies.pop();
console.log(movies);

var movie = {
  title:'Avengers',
  time:'12pm',
  statue:'avaliable'
};
alert(movie.title);
movie.status = 'avaliable';
console.log(movie);

var fruits = [];
for(i=1;i<10;i++){
  fruits[i] = prompt("Enter fruit");
}
alert("fruits contains "+fruits);

var movie2 = ['Avengers','Captain Marvel','Black Panther','Spiderman'];
movie2.forEach(function(movie) {
  alert(movie);
})

var movieDetails = [
  {
    title:'Avengers',
    time:'12pm',
    status:'avaliable'
  },
  {
    title:'Captain Marvel',
    time:'2pm',
    status:'unavaliable'
  },
  {
    title:'Black Panther',
    time:'4pm',
    status:'avaliable'
  },
  {
    title:'Spiderman',
    time:'6pm',
    status:'avaliable'
  },
]
