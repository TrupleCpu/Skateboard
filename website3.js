const openPop = document.getElementById("Users");
const PopOpen = document.getElementById("popGo");
const move = false;
let popExit = document.getElementById("exit");

openPop.addEventListener("click", function(){
   if(!move){
    PopOpen.style.marginTop = "120px";
   } else {
    PopOpen.style.marginTop = "-10000px";
   }
   move = !move;
})
popExit.addEventListener("click", function(){
    PopOpen.style.marginTop = "-10000px";
})
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
loop: true,

pagination: {
el: '.swiper-pagination',
clickable: true, 
},

navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

});



