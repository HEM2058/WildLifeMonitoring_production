
var map = L.map('map', {
    fullscreenControl: true,
    fullscreenControlOptions: {
      position: 'topleft'
    }
  }).setView([51.1657, 10.4515], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.1657, 10.4515]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();


// Basemap layer using OpenStreetMap tiles
var osmLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Google Satellite layer
var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    maxZoom: 20,
    minZoom: 0,
    label: "Google Satellite"
});




// Create a control object
var layersControl = {
    'OpenStreetMap': osmLayer,
    'satellite': googleSat
};
L.control.layers(layersControl).addTo(map);


// Create a legend control
var legend = L.control({ position: 'bottomright' });

// Function to generate the legend content
legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'legend');
    
    // Define the legend content (you can customize this)
    div.innerHTML += '<div class="legend-title"><strong>Legend</strong></div>';
    div.innerHTML += '<div><i class="fas fa-circle" style="color:green;"></i> Wild Boars Alive</div>';
    div.innerHTML += '<div><i class="fas fa-circle" style="color:red;"></i> Carcass Findings</div>';
    div.innerHTML += '<div><i class="fas fa-circle" style="color:blue;"></i> Other Game Species</div>';
    
    return div;
};

// Add the legend to the map
legend.addTo(map);

function onSelectDate(value){
    alert(`Date: ${value}`);
}


L.control.calendar({
    minDate: "2023-04-01",
    maxDate: "2023-04-29",
    onSelectDate: (value) => this.onSelectDate(value),
    position: "topleft",
}).addTo(this.map);


