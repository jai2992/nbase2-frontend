let tasks = JSON.parse(localStorage.getItem("task"))||[]

let taskName = document.querySelector(".taskName")
let taskDes = document.querySelector(".taskDes")
let time = document.querySelector(".timeInput")
time.min=new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"));
time.max=new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"));

function deleteAll()
{
    for(let i=0;i<tasks.length;i++)
    {
        deleteTask(tasks[i].id)
    }
    display()
}
function notify(id)
{
    let t = tasks[id].time
    t = t   .split(":")
    console.log(t);
    let d = new Date()
    t[0]=(parseInt(t[0])-d.getHours())*60*60*1000
    t[1]=(parseInt(t[1])-d.getMinutes())*60*1000
    let delay = (t[0]+t[1]+(-d.getSeconds())*1000)
    console.log("notify ",delay/1000)
    if(delay>0)
    {
        setTimeout(()=>{
            alert(`Remainder ${tasks[id].name} !!!`)
        },delay)
    }
}

function addTask(event)
{
    event.preventDefault()
    tasks.push({
        id: tasks.length,
        name: taskName.value,
        des: taskDes.value,
        time: time.value,
        status:0
    });
    taskName.value=""
    taskDes.value=""
    time.value=""
    notify(tasks.length-1)
    display()
}
function saveLocal()
{
    localStorage.setItem("task",JSON.stringify(tasks))
    alert("sucessfully saved!!")
}
function saveLocalWithoutAlert()
{
    localStorage.setItem("task",JSON.stringify(tasks))
}
function deleteTask(id)
{
    console.log(id)
    tasks=tasks.filter((task)=>{
        return task.id!=id
    })
    display()
}
function changeStatus(id)
{
    tasks=tasks.map(task=>
    {
        if(task.id===id)
        {
            if(task.status)
            {
                alert("already completed")
                return task
            }
            return {...task,status:task.status===1?0:1}
        }
        return task
    })
    display()
}

function display()
{
    let s=''
    for(let i = 0 ; i<tasks.length;i++)
    {
        s+=`<div class="task">
        <h3>${tasks[i].name}</h3>
        <p>${tasks[i].des}</p>
        <p>${tasks[i].time}</p>
        <button onclick="changeStatus(${tasks[i].id})">${tasks[i].status?"completed":"pending"}</button>
        <button onclick="deleteTask(${tasks[i].id})">delete</button>
        </div>
        `
    }
    let con = document.querySelector(".tasks-container")
    con.innerHTML=s
    saveLocalWithoutAlert()
    
}
display()

for(let i=0;i<tasks.length;i++)
{
    notify(i)
}