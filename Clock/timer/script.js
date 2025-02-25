let count = 10
let temp = 10
function changeCount(){
    count = document.querySelector(".count").value
    temp=count
}

let timerId;
let btn = document.querySelector("button")
function startTimer(){
    btn.setAttribute("onclick","stopTimer()")
    btn.innerHTML="Stop"
    timerId = setInterval(()=>
    {
        count--
        if(count==0)
        {
            clearInterval(timerId)
            alert("time out !!")
            count = temp
            document.querySelector(".count").setAttribute("value",count)
            btn.setAttribute("onclick","startTimer()")
            btn.innerHTML="Start"
        }
        document.querySelector(".count").value=count
        document.querySelector("hr").setAttribute("width",`${(count/temp)*100}%`)
    },1000)
}
function stopTimer(){
    btn.setAttribute("onclick","startTimer()")
    btn.innerHTML="Start"
    clearInterval(timerId)
}