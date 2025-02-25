let pages = [
    {name: "💰 Price Slider", path: "./small-components/price slider/index.html", desc: "Adjust and visualize prices dynamically with this slider! 📉"},
    {name: "Sidebar 📂", path: "./small-components/sidebar/index.html", desc: "A sleek and responsive sidebar navigation for your projects! 🏗️"},
    {name: "🌗 Toggle Dark Mode", path: "./small-components/toggle-dark/index.html", desc: "Switch between light and dark mode seamlessly! 🌙☀️"},
    {name: " To-Do List 📝", path: "./to-do/index.html", desc: "Organize your tasks efficiently with this to-do list! ✅"},
    {name: "💎 Gem Counter ", path: "./small-components/gem counter/index.html", desc: "Track your gems effortlessly with this interactive counter! 🔢"},
    {name: "Weather App 🌦️", path: "./small-components/weather/index.html", desc: "Check real-time weather updates with this simple app! ⛅"},
    {name: "📸 QR Code Generator", path: "./small-components/qr-code/index.html", desc: "Generate QR codes instantly with this handy tool! 🔳"},
    {name: "Clock⏰", path: "./Clock/stopwatch/index.html", desc: "Explore the features of a modern clock ⏳"}
];

let c1=""
let c2=""
for(let i = 0; i < pages.length ; i++)
{
    if(i % 2 == 0)
        {
            c1+=`<a href="${pages[i].path}" target="_blank" ><div class="content">
            <p>${pages[i].desc}<p>
            </div></a>`
            c2+=`<div class="content-logo">${pages[i].name}</div>`
        }
        else{
            c1+=`<div class="content-logo-left">${pages[i].name}</div>`
            c2+=`<a href="${pages[i].path}" target="_blank"><div class="content">
            <p>${pages[i].desc}<p>
            </div></a>`
        }
    }
        
let con1 = document.querySelector(".container-1")
let con2 = document.querySelector(".container-2")

con1.innerHTML=c1
con2.innerHTML=c2