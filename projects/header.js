const html = document.querySelector('html');
const body = document.querySelector('body');
const head = document.querySelector('head');
body.style.margin = 0;
body.style.padding =0;


const icon = document.createElement('link');
icon.setAttribute('rel', 'icon');
icon.setAttribute('href', '../../icon.ico')

head.appendChild(icon)
//Declaring the font for the header thing
const link1 = document.createElement('link');
link1.setAttribute('rel' , 'preconnect');
link1.setAttribute('href' , `https://fonts.gstatic.com`)
const link = document.createElement('link');
link.setAttribute('rel' , 'stylesheet');
link.setAttribute('type' , 'text/css');
link.setAttribute('href' , `https://fonts.googleapis.com/css2?family=Bangers&display=swap`)
html.appendChild(link);
html.appendChild(link1);

//the header elements css property
const header = document.querySelector('header');
header.style.backgroundImage = 'linear-gradient( to right, #41295a ,#2F0743)' ;
header.style.padding = '20px';
header.style.position = 'relative'; 
    //header.style.width = '100%';
header.style.margin = '0';
    //header.style.float = 'right';

//the title elements css property
const title = document.createElement('h1');
title.style.fontFamily = `'Bangers', cursive`;

title.style.letterSpacing = '5px';
title.style.color = 'white';
title.style.display = 'inline-block';
title.textContent = `Rumi's Coding Arena`;
header.appendChild(title);

// a link to the main page (Parent of button)
const aLink = document.createElement('a');
aLink.setAttribute('href' , '../../index.html')


//the botton to go back to main page
const mainBtn = document.createElement('button');
    mainBtn.style.position = 'absolute';
mainBtn.textContent = 'Go Back to the main page';
    mainBtn.style.display = 'inline';
    mainBtn.style.float = 'right';
mainBtn.style.fontFamily = `'Bangers', cursive`;
    mainBtn.style.right = '3%';
mainBtn.style.backgroundColor = 'white';
mainBtn.style.border = '0 none';
mainBtn.style.borderRadius = '50px';
mainBtn.style.margin = 'auto';
mainBtn.style.padding = '10px';
    mainBtn.style.top = '35%'
mainBtn.style.margin = '0';
aLink.appendChild(mainBtn);
header.appendChild(aLink);

//change the botton tu a