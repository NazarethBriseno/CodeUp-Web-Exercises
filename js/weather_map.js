$(function(){
    //Weather API

    // $.get("http://api.openweathermap.org/data/2.5/onecall", {
    //     APPID: OPEN_WEATHER_APPID,
    //     lat:    29.423017,
    //     lon:   -98.48527,
    //     units: "imperial"
    // }).done(function(data) {
    //     console.log('The entire response:', data);
    //     console.log('Diving in - here is current information: ', data.current);
    //     console.log('A step further - information for tomorrow: ', data.daily[1]);
    // });
    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_APPID,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {
        console.log(data);
        console.log("WEATHER");
        $("#weatherCards").append(`
               <div class="card text-center" style="width: 16rem;">
          <div class="card-header">
            Today's Weather
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Temperature is ${data.main.temp}</li>
            <li class="list-group-item">Feels like ${data.main.feels_like}</li>
            <li class="list-group-item">Description: ${data.weather[0].description} <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png"</li>
            <li class="list-group-item">Humidity: ${data.main.humidity}</li>
            <li class="list-group-item">Pressure: ${data.main.pressure}</li>
          </ul>
        </div>
        `)
    });

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {
        console.log(data);
        console.log("FORECAST");
        //This for Loop takes the string with the date and time and splits it, so if the object is equal to zero, it
        // will append everything.
        for(let i=0; i < data.list.length; i++){
            let seperatedDateAndTime = data.list[i].dt_txt.split(" ");
            if(seperatedDateAndTime[1] === "00:00:00"){
                $("#weatherCards").append(`
               <div class="card text-center" style="width: 16rem;">
          <div class="card-header">
            ${seperatedDateAndTime[0]}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Temperature is ${data.list[i].main.temp}</li>
            <li class="list-group-item">Feels like ${data.list[i].main.feels_like}</li>
            <li class="list-group-item">Description: ${data.list[i].weather[0].description}</li>
            <li class="list-group-item">Humidity: ${data.list[i].main.humidity}</li>
            <li class="list-group-item">Pressure: ${data.list[i].main.pressure}</li>
          </ul>
        </div>
        `)
            }
        }


    });
    //End of Weather API

})