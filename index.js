let request = require('request');
let lat = -22.842397773571907
let lon = -43.287416802411116
let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
`lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;
let dados ='';
 
request(url, function (err, response, body) {
if(err){
    console.log('error:', error);   
} else {
let weather = JSON.parse(body);
dados = `Dados Metereológicos para ${weather.name}:
-Velocidade vento:  ${weather.wind.speed}~
-Temp Máxima: ${weather.main.temp_max}ºC
-Temp Minima: ${weather.main.temp_min}ºC
-Humidade: ${weather.main.humidity}%`;console.log(dados);
let temp = `${weather.main.temp}`-273.15;
let tempMAX = `${weather.main.temp_max}`-273.15;

console.log('-Temperatura: '+temp+'ºC');
console.log('-Temperatura máxima: '+tempMAX+'ºC')
console.log(typeof(temp));

}
});

