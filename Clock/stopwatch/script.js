let count = 1
let timerId;
let isTimerOn = 0;
let container = document.querySelector(".container")

function stopwatch()
{
    timerId=setInterval(()=>{
        document.querySelector(".timer").innerHTML=count++
    },1000)
}
function start_stopwatch()
{
    if(!isTimerOn)
    {
        isTimerOn=1
        stopwatch()
        container.setAttribute("class","container-run")
    }
}

function stop_stopwatch()
{
    isTimerOn=0;
    clearInterval(timerId)
    container.setAttribute("class","container-stop")
    setTimeout(()=>{
        container.setAttribute("class","container")
    },3000)
}

function reset()
{
    isTimerOn=0;
    clearInterval(timerId)
    count=0
    document.querySelector(".timer").innerHTML=count
    container.setAttribute("class","container-reset")
    setTimeout(()=>{
        container.setAttribute("class","container")
    },3000)
}