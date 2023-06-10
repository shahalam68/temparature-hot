// Don't show api Key   f76409d7735bfff7c1ca63b6c5c83ad4

const API_KEY = `f76409d7735bfff7c1ca63b6c5c83ad4`;
const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const displayTemperature = data =>{
    // // const temperature = document.getElementById('temperature');
    // // console.log(data.main.temp);
    // temperature.innerText = data.main.temp;
    setInnerTextById('temperature', data.main.temp)
    setInnerTextById('condition', data.weather[0].main);
}
const setInnerTextById = (id,text)=>{
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}
document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city').innerText = city
    loadTemperature(city);
})

loadTemperature('Dhaka')