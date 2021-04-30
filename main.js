
// adding links with JS 
const links = document.querySelector('.links');

function addToLinks(name, link){
    const p = document.createElement('p')
    p.classList.add('toggle-active');
    const a = document.createElement('a');
    a.textContent = name;
    a.setAttribute('href' , link);
    p.appendChild(a);
    links.appendChild(p);
}
addToLinks('The To Do List' , 'projects/to-do-list/the-to-do-list.html');
addToLinks('The Bouncing Balls' , 'projects/the-bouncing-balls/bouncing-ball.html');



const hamburger = document.querySelector('.hamburger');

const actives = document.querySelectorAll('.toggle-active')

hamburger.addEventListener('click' ,function(){
   for(let i = 0 ; actives.length > i ; i++){
       actives[i].classList.toggle('active');
   }
})