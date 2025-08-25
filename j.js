let display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
function start()
{
    if(!isRunning)
    {
        startTime = Date.now()-elapsedTime;
        timer = setInterval(update,10);
        isRunning = true;
    }
}
function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = true;
    display.textContent = "00:00:00:00"
}
function stop(){
    if(isRunning){
    clearInterval(timer);
    isRunning = false;
    elapsedTime = Date.now() - startTime;
}
}
function update(){
    elapsedTime = Date.now() - startTime;
    let hour = Math.floor(elapsedTime/(1000*60*60));
    let minute = Math.floor(elapsedTime/((1000*60 ))%60);
    let second = Math.floor((elapsedTime/1000)%60 );
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);
    hour  = hour<10?"0"+hour:hour;
    minute = minute<10?"0"+minute:minute;
    second = second<10?"0"+second:second;
    display.textContent = `${hour}:${minute}:${second}:${milliseconds}`;
}
