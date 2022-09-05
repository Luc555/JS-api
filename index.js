let request = require('request');

//let lat = -22.509711458572806//Petropolis
//let lon = -43.17421659695316//Petropolis

let cidade = 'teresopolis'
let limit = 10;
let country = 'BR';

let apiKey = '6d055e39ee237af35ca066f35474e9df';

//Exemplo de chamada de API usando coordenadas geográficas
//let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
//`lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;

//Exemplo de chamada de API usando o nome da cidade, o código do país e também um limit definido de cidades.
//let url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade},${country}&${limit}&appid=${apiKey}&units=metric`

let url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&${limit}&appid=${apiKey}&units=metric`


let dados ='';
function showWeather(){
    request(url, function (err, response, body) {
        if(err){
            console.log('error:', error);   
    }   
        else {

            let weather = JSON.parse(body);
            dados = `Dados Metereológicos para ${weather.name}, ${weather.state}, ${weather.sys.country}:
            -vento:  ${weather.wind.speed}
            -Temp Máxima: ${weather.main.temp_max}ºC
            -Temp Minima: ${weather.main.temp_min}ºC
            -Humidade: ${weather.main.humidity}%
            -Nível do mar: ${weather.main.sea_level}m`;console.log(dados)
            
            console.log(typeof(temp));
        //console.log(weather);
            
            
        
    }  
        return dados;
    
});
        
}       
        
        console.log(showWeather());