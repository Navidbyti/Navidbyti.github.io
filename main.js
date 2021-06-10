
// adding links with JS and a JSON file
const links = document.querySelector('.links');
let projects;

fetch('project.json').then(function(response) {
    if(response.ok){
        response.json().then(function(json){
        projects = json;
        createProjectLinks();
        drawMenu()
    })}else{
        console.log(response.status)
    }
}).catch(e => {throw new Error(e.message)})

function createProjectLinks(){
    for(let i=0; i < projects.length; i++){
        const p = document.createElement('p')
        p.classList.add('toggle-active');
        const a = document.createElement('a');
        a.textContent = projects[i].name;
        a.setAttribute('href' , projects[i].url);
        p.appendChild(a);
        links.appendChild(p);
    }
}




function drawMenu(){
const hamburger = document.querySelector('.hamburger');

const actives = document.querySelectorAll('.toggle-active')

hamburger.addEventListener('click' ,function(){
   for(let i = 0 ; actives.length > i ; i++){
       actives[i].classList.toggle('active');
   }
})
}