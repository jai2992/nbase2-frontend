let arr = ["option 1", "option 2", "option 3", "option 4"]
let selected = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

const c = document.querySelector(".container")

function selectBox(id)
{
    selected[id]=selected[id]?0:1
    let s = ""  
    for(let i = 0;i<arr.length;i++)
    {
        s+=`<div class=${selected[i]?"box-selected":"box"} onclick="selectBox(${i})">${arr[i]}</div>`
    }   
    c.innerHTML=s
    let f = document.querySelector("footer")
    let count = 0;
    f.innerHTML=arr.filter((e)=>
    {
        return selected[count++]==1
    })
}
selectBox(-1)


