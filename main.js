const hamburger = document.querySelector('.hamburger');

const actives = document.querySelectorAll('.toggle-active')

hamburger.addEventListener('click' ,function(){
   for(let i = 0 ; actives.length > i ; i++){
       actives[i].classList.toggle('active');
   }
})