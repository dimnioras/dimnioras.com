mapboxgl.accessToken = 'pk.eyJ1IjoiZGltbmlvcmFzIiwiYSI6ImNqNGE3cWR4ODB5d2czMnBubzdmYzl6bmMifQ.alch9v-xY_0eG-KUq3ZErA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10'
});

map.on('load', function () {
 
map.addLayer({
"id": "test-data",
    "name": "test-line",
"type": "line",
"source": {
type: 'vector',
url: 'https://gitlab.com/dimnioras/athens-public-transport-archive/blob/master/test-line.geojson'
},
"layout": {
"line-join": "round",
"line-cap": "round"
},
"paint": {
"line-color": "#ff69b4",
"line-width": 1
}
});
});