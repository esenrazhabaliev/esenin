const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event){
    jump();
});

function jump() {
    if(dino.classList != "jump"){
        dino.classList.add("jump")
    }
    setTimeout( function() {
        dino.classList.remove("jump")
    }, 300) 
}
 let abay = setInterval ( function(){
     let dinotop = parseint(window.getComputedStyle(dino).getPropertyValue("top"));
     let cactusleft = parseint(window.getComputedStyle(cactus).getPropertyValue("left"));
     if(cactusleft < 50 && cactusleft > 0 && dinotop >= 140){
         alert("GAME OVER!")
     }
 },10)