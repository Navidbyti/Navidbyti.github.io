const theTime = document.getElementById('the-time');

function updateDate(){
    let date = new Date();
    let secound = date.getSeconds();
    let minute = date.getMinutes();
    let hour = date.getHours();

    return [ secound , minute, hour]; 
} 
 
function theTimer(){
    let theNewTime = updateDate();
    let sec = theNewTime[0];
    let min = theNewTime[1];
    let hour = theNewTime[2];
    let pmam;
     
        if (hour > 12){
            pmam = 'PM';
            hour -= 12;
        }else {
            pmam = 'AM';
        }

    

        if(min < 10){
            min = '0' + min;
        }

        if (sec < 10 ){
            sec = '0' + sec;
        }
        if(hour == 0){
            hour = 12;
        }
        return `${hour}:${min}:${sec} ${pmam}`
        
}

function loop(){
    theTime.textContent = theTimer();
    requestAnimationFrame(loop);
}
loop();

const timeBtn = document.querySelector('.sukht-button');
const img = document.querySelector('img');
const textParty = document.querySelector('.the-time-text')



timeBtn.addEventListener('click', function(){
    if(timeBtn.getAttribute('id') == 'first' ){
        timeBtn.setAttribute('id' , 'secound');
        timeBtn.textContent = 'The engine is now on';
        timeBtn.style.backgroundColor = '#fa5a5a';
        img.setAttribute('src' , 'images/party-time.PNG');
        textParty.textContent ='hayyyyy heyyyyy mashalaa!';

    }else if(timeBtn.getAttribute('id') === 'secound'){
        timeBtn.setAttribute('id' , 'first');
        timeBtn.textContent = 'Sukhte engine badane man!';
        timeBtn.style.backgroundColor = 'white';
        img.setAttribute('src' , 'images/wainting-party.PNG');
        textParty.textContent = 'Porteghal haye malmalani, dar shakhe sar haye nielgun!';
    }
})
