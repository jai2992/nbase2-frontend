const t = document.querySelector(".toggle")
let active = 1
t.addEventListener("click",()=>
{
    const sidebar = document.querySelector(".sidebar")
    if(active)
    {   
        sidebar.style.display = "none"
        active=0
    }
    else{
        sidebar.style.display = "block"
        active=1
    }
})