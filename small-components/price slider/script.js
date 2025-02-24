const slider = document.querySelector(".slider")
function setValue(){
    const h = document.querySelector(".value")
    h.innerHTML=slider.value
}
setValue()