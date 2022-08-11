// alert("hello");//exaustive approach
// document.querySelector(".w").addEventListener("click",onclick);
// document.querySelector(".a").addEventListener("click",onclick);
// document.querySelector(".s").addEventListener("click",onclick);
// document.querySelector(".d").addEventListener("click",onclick);
// document.querySelector(".j").addEventListener("click",onclick);
// document.querySelector(".k").addEventListener("click",onclick);
// document.querySelector(".l").addEventListener("click",onclick);

var noOfButtonsToBeClicked = document.querySelectorAll(".drum").length;
// var audio = new Audio('sounds/crash.mp3');

for (i = 0; i < noOfButtonsToBeClicked; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // audio.play();
    // this.style.color="white";
    var buttonInnerHTML = this.innerHTML;
    
    soundMaker(buttonInnerHTML);
      addAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress",function(event){
    soundMaker(event.key);
      addAnimation(event.key);

});
 



/////function key which take a value of a key and pass it through the switch case./////
function soundMaker(key){
    switch (key) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");  /////making new object tom 1 from constructor function Audio/////
          tom1.play();
          
          break;
        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
        case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
        case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
        case "j":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
        case "k":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
        case "l":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
  
        default:
          console.log("heyyy there is a glitch ");
          break;
      }
}

function addAnimation(clickedkey){
    var animationOnActiveButton = document.querySelector("."+clickedkey);
    animationOnActiveButton.classList.add("pressed");
    setTimeout(function(){ animationOnActiveButton.classList.remove("pressed")}, 100)

}
function darkMode(){
  var element = document.body;
  element.classList.toggle("darkMode");
}