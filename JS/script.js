let string = `It was 94 fahrenheit outside, so Willy the
Goblin went for a walk. When they got to the
soup kitchen, they stared in horror for a few
moments, then turned into a slug and crawled
away. Bob saw the whole thing, but was not
surprised — Willy the Goblin weighs 300
pounds, and it was a hot day.`
let res="";

const story = document.getElementById("story")
const btn = document.getElementById("btn")
btn.addEventListener('click',()=>{
    const customName = document.getElementById("custom name")
    var rad = document.getElementsByName("name")
    for(let i=0;i<rad.length;i++)
    {
        if(rad[i].checked)
        {
            console.log(rad[i].value)
        }
    }
    // console.log(rad.value)
    res = string.replace("Bob",customName.value)
    story.innerHTML=res;
})
// console.log(customName)