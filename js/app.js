// Don't show api Key   f76409d7735bfff7c1ca63b6c5c83ad4

const API_KEY = `f76409d7735bfff7c1ca63b6c5c83ad4`;
const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}
loadTemperature('Dhaka')

const displayTemperature = data =>{
    const temperature = document.getElementById()
}