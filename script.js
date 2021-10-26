let knb = Math.floor(Math.random()*3);

if(knb === 1){
    knb = "rock"
}else if(knb === 2){
    knb = "paper"
}else {
    knb = "scissors"
}

let user = prompt('choose the winning word: rock/paper/scissors');
if (user === knb){
    alert("draw")
}else if ((user === "rock" && knb === "scissors") || (user === "scissors" && knb === "paper") || (user === "paper" && knb === "rock")){
   alert("you won")
}else if ((user === "scissors" && knb === "rock") || (user === "rock" && knb === "paper") || (user === "scissors" && knb === "rock")){
    alert("you lose")
}else{
    alert("error")
}
console.log(knb);