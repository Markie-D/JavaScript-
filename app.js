let rating =2;

if (rating ===3) {
    console.log('YOUR ARE A SUPERSTAR!');
}
else if (rating === 2) {
    console.log('MEETS EXPECTATIONS');
}
else if (rating ===2) {
    console.log('NEEDS IMPROVEMENT');
}
else{
    console.log ('INVALID RATING!');
}




let highScore = 1430;
let userScore = 1300;

if (userScore >= highScore) {
    console.log(`Congrats, you have the new 
    high score of ${userScore}`);
    highScore = userScore;
}
else {
    console.log(`Good Game. Your score of ${userScore}
    did not beat the high score of ${highScore}`)
}





let password = 'billy b';

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('Valid Password!');
    }
    else {
       console.log('Password is long enough, but cannot contain spaces');
    }
}
else{
    console.log('Password must be longer!');
}





let loggedInUser = null;

if (loggedInUser) {
    console.log('YOU ARE LOGGED IN!');
}
else {
    console.log('PLEASE LOG IN!');
}







let age = 35;

if(age < 6 ||age >= 65){
    console.log('You get in for free!');
}
else {
    console.log('That will be $10 please');
}









let flavor ='strawberry';

if (flavor !== 'grape' && flavor !== 'cherry') {
    console.log ('WE DONT HAVE THAT FLAVOR!');
}



let x = 7;
x == 7 || x ===3 && x > 10;



let day = 1; 

if (day === 1) {
    console.log('MONDAY');
}

if (day === 2) {
    console.log('TUESDAY');
}

if (day === 3) {
    console.log('WEDNESDAY');
}

if (day === 4) {
    console.log('THURSDAY');
}

if (day === 5) {
    console.log('FRIDAY');
}

if (day === 5) {
    console.log('SATURDAY');
}

if (day === 6) {
    console.log('SUNDAY');
}



let num = 5;
if (num ===7) {
    console.log('Lucky!');
}
else{
    console.log('BAD!');
}

let shoppingList = ['Rice', 'talapia', 'Ricecakes','Ground Turkey'];



let topSongs = [
    'You And The Six', 'Gone F It Up', 'Legends End The Room', 'jumbotron Shit Poppin'
];

topSongs.push('You And The Six');
topSongs.push('Gone F It UP');



let dishesToDo = ["big plate ","small plate","big spoon","forks","knives"];









function countDown(time){
    let timer = setInterval(function(){
      time--;
      if(time <= 0){
        clearInterval(timer);
        console.log('DONE!');
      }
      else {
        console.log(time);
      }
  
    },1000)
  }



  