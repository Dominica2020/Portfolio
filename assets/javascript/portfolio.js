function myFunction() {
    document.getElementById("hidden-menu").style.display = "unset";
   
   document.getElementById("hamburger").style.display = "none";
   
   document.getElementById("close").style.display = "unset";
   
 }
 
 function closeMenu() {
   document.getElementById("close").style.display = "none";
   
   document.getElementById("hidden-menu").style.display = "none";
   
   document.getElementById("hamburger").style.display = "unset";
   
 }

 var textWrapper = document.querySelector('.ml12');
 textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
 
 anime.timeline({loop: true})
   .add({
     targets: '.ml12 .letter',
     translateX: [40,0],
     translateZ: 0,
     opacity: [0,1],
     easing: "easeOutExpo",
     duration: 1500,
     delay: (el, i) => 500 + 30 * i
   }).add({
     targets: '.ml12 .letter',
     translateX: [0,-30],
     opacity: [1,0],
     easing: "easeInExpo",
     duration: 1300,
     delay: (el, i) => 100 + 30 * i
   });


   //document.getElementById("close").style.display = "none";