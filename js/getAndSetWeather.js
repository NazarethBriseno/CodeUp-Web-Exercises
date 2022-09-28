function getAndSetWeather(){
    //Weather API
    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_APPID,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
    }).done(function (data) {
        console.log(data);
        console.log("WEATHER");
        $("#weatherCards").append(`
       <div class="card text-center m-2" style="width: 14rem;">
          <div class="card-header">
            Today's Weather<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Temperature is ${data.main.temp}</li>
            <li class="list-group-item">Feels like ${data.main.feels_like}</li>
            <li class="list-group-item">Description: ${data.weather[0].description}</li>
            <li class="list-group-item">Humidity: ${data.main.humidity}</li>
            <li class="list-group-item">Pressure: ${data.main.pressure}</li>
          </ul>
       </div>
    `)
    });


//ForeCast
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
    }).done(function (data) {
        console.log(data);
        console.log("FORECAST");
        //This for Loop takes the string with the date and time and splits it, so if the object is equal to zero, it
        // will append everything.
        for (let i = 0; i < data.list.length; i++) {
            let seperatedDateAndTime = data.list[i].dt_txt.split(" ");
            if (seperatedDateAndTime[1] === "00:00:00") {
                $("#weatherCards").append(`
                <div class="card text-center m-2" style="width: 14rem;">
                    <div class="card-header">
                        ${seperatedDateAndTime[0]}<img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png">
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
    }); // end forecast ajax request and .done
}


function changeWeather(result){
    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: OPEN_WEATHER_APPID,
        lat: result[1],
        lon: result[0],
        units: "imperial"
    }).done(function (data) {
        console.log(data);
        console.log("WEATHER");
        $("#weatherCards").empty().append(`
       <div class="card text-center m-2" style="width: 14rem;">
          <div class="card-header">
            Today's Weather<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Temperature is ${data.main.temp}</li>
            <li class="list-group-item">Feels like ${data.main.feels_like}</li>
            <li class="list-group-item">Description: ${data.weather[0].description}</li>
            <li class="list-group-item">Humidity: ${data.main.humidity}</li>
            <li class="list-group-item">Pressure: ${data.main.pressure}</li>
          </ul>
       </div>
    `)
    });


//ForeCast
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: result[1],
        lon: result[0],
        units: "imperial"
    }).done(function (data) {
        console.log(data);
        console.log("FORECAST");
        //This for Loop takes the string with the date and time and splits it, so if the object is equal to zero, it
        // will append everything.
        for (let i = 0; i < data.list.length; i++) {
            let seperatedDateAndTime = data.list[i].dt_txt.split(" ");
            if (seperatedDateAndTime[1] === "00:00:00") {
                $("#weatherCards").append(`
                <div class="card text-center m-2" style="width: 14rem;">
                    <div class="card-header">
                        ${seperatedDateAndTime[0]}<img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png">
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
    }); // end forecast ajax request and .done
}