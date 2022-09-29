$(function(){
    //This function calls to the default weather which is set to San Antonio
    getAndSetWeather();

    //MapBOX
    mapboxgl.accessToken = 'pk.eyJ1IjoibmF6YXJldGhicmlzZW5vIiwiYSI6ImNsOGVwczdtZzAwdGIzcW1tbGtwcGd3OWkifQ.As2ZN5u4cqcPgsQtgcdZJQ';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/dark-v10', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
        projection: 'globe' // display the map as a 3D globe
                                });
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
                              },
            trackUserLocation: true,
            showUserHeading: true
                                      })
                    );

    $("#submitMarker").on('click', function(){
        geocode($("#userMarker").val(), MAPBOX_API_TOKEN).then(function(result) {
            map.setCenter(result);
            let marker = new mapboxgl.Marker({
                draggable: true
                })
                .setLngLat(result)
                .addTo(map);

                console.log(result[0]);
                changeWeather(result);
                function onDragEnd() {
                    const lngLat = marker.getLngLat();
                    coordinates.style.display = 'block';
                    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
                    hoverWeather(lngLat);
                }
                marker.on('dragend', onDragEnd);

        }) //End of GeoCode result function

    }); // end submit marker click event handler

}) // document.ready function end
