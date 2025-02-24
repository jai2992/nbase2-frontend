
function getWeather()
{
    fetch("https://flexweather.com/api/now?lat=52.5200&lon=13.4050&units=metric")
        .then((response)=>{
            return response.json()
        })
            .then((data)=>{
                let temp = document.querySelector(".temp-content")
                let tempImg = document.querySelector(".temp-img") 
                
                
                tempImg.setAttribute("src","hot.gif")
                temp.innerHTML=`Current Temperature : ${data.temperature_current} ${data.temperature_unit}<br>
                Maximum Temperature : ${data.temperature_max} ${data.temperature_unit} <br>
                Minumum Temperature : ${data.temperature_min} ${data.temperature_unit}`
                
                let con = document.querySelector(".condition")
                let conImg = document.querySelector(".con-img")
                conImg.setAttribute("src","wind.gif")
                con.innerHTML=`Condition : ${data.condition}<br>
                wind speed : ${data.wind_speed} ${data.wind_speed_unit}<br>
                wind_direction : ${data.wind_direction}`
                console.log(data)
                
            })
                .catch((error)=>
                {
                    console.log(error);
                    
                })

}
getWeather()