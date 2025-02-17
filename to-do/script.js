const tasks = []
const deadLines = []
const progress = []
function saveLocal()
{
    localStorage.setItem("tasks",tasks)
    localStorage.setItem("deadlines",deadLines)
    localStorage.setItem("progress",progress)
    alert("saved successfully !!!")
}
console.log(localStorage.getItem('tasks'));

tasks.push(localStorage.getItem('tasks'))
deadLines.push(localStorage.getItem('deadlines'))
progress.push(localStorage.getItem('progress'))
const showTask = document.getElementById("tasks")
showTask.innerHTML=viewTasks()

function delTask(id)
{
    tasks.splice(id,1)
    deadLines.splice(id,1)
    progress.splice(id,1)
    const showTask = document.getElementById("tasks")
    showTask.innerHTML=viewTasks()

}
function changeProgress(id)
{
    progress[id]=progress[id]?0:1
    const showTask = document.getElementById("tasks")
    showTask.innerHTML=viewTasks()
}
function editTask(id)
{
    tasks[id]=prompt("Edit the task")
    const showTask = document.getElementById("tasks")
    showTask.innerHTML=viewTasks()
}
function viewTasks()
{
    let taskView = `<tr>
                <th>Sno</th>
                <th>Task</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>`
    for(let i=0;i<tasks.length;i++)
    {
        taskView+=`<tr>
        <td>${i+1}</td>
        <td>${tasks[i]}</td>
        <td>${deadLines[i]}</td>
        <td><button class=${progress[i]?"completed":"pending"} onclick="changeProgress(${i})">${progress[i]?"completed":"pending"}</button></td>
        <td><button class="edit-btn" onclick="editTask(${i})">Edit</button></td>
        <td><button class="del-btn" onclick="delTask(${i})">Delete</button></td>
        </tr>
        `
    }
    // console.log(taskView)
    return taskView
}

function addTask()
{
    const t = document.getElementById("task")
    const d = document.getElementById("deadline")
    if(t.value)
    {
        tasks.push(t.value)
    }
    if(d.value)
    {
        deadLines.push(d.value)
        progress.push(0)
    }
    const showTask = document.getElementById("tasks")
    showTask.innerHTML=viewTasks()
    console.log(tasks,deadLines,progress)
}

let btn = document.getElementById("add-task")
btn.addEventListener("click",addTask)