import 'regenerator-runtime/runtime'

let searchBtn = document.querySelector(".searchBtn")
let temperature = document.getElementById("temperature")
let cityHeader = document.getElementById("city")

async function getWeather(city){
    try{   
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=eaecefd8c7265a6dd917804f34c60c77&units=metric&lang=pt_br`, {mode: 'cors'})
        let weatherData = await response.json()
        return weatherData
    } catch(err){
        return err
    }
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let city = document.getElementById("inputCity")
    cityHeader.innerText = city.value.charAt(0).toUpperCase() + city.value.slice(1)
    let temp = getWeather(city.value).then((weather) => {
        // console.log(weather)
        return weather.main.temp
    })
    temp.then(t => temperature.innerHTML = t.toString() + "&#8451").catch(e => temperature.innerHTML = e)
    city.value = ""
})