let favoritePlaces = [
    {"name": "TruFit",
        "category": "Gym",
        "coords":[-98.49335, 29.35772]},
    {"name": "B & B Smokehouse",
        "category": "Food, BBQ",
        "coords":[-98.504297, 29.35311]}
];

mapboxgl.accessToken = MAPBOX_API_TOKEN;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
    projection: 'globe' // display the map as a 3D globe
});
map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});

map.setCenter([-98.491142, 29.424349]);

const sushiMarker = new mapboxgl.Marker()
    .setLngLat([-98.500628, 29.4353])
    .addTo(map);
const sushiPopup = new mapboxgl.Popup()
    .setHTML('<p class="mt-3" style="width: 250px;">Kimura Sushi Bar</p>');
sushiMarker.setPopup(sushiPopup);

favoritePlaces.forEach(function(value){
    let newMarker = new mapboxgl.Marker()
        .setLngLat(value.coords)
        .addTo(map);
    let newPop = new mapboxgl.Popup()
        .setHTML(`<p class="mt-3" style="width: 250px;">${value.name}</p>`);
    newMarker.setPopup(newPop);
});

$("#submitMarker").on('click', function(){
    geocode($("#userMarker").val(), MAPBOX_API_TOKEN).then(function(result) {
        let markerName1 = $("#markerName").val();
        map.setCenter(result);
        map.setZoom(12);
        let newMarker = new mapboxgl.Marker()
            .setLngLat(result)
        .addTo(map);
        let newPop = new mapboxgl.Popup()
            .setHTML(`<p class="mt-3" style="width: 250px;">${markerName1}</p>`);
        newMarker.setPopup(newPop);
    });


})