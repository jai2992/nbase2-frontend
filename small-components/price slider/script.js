const slider = document.querySelector(".slider")
function setValue(){
    const h = document.querySelector(".heading")
    h.innerHTML=slider.value
}
setValue()