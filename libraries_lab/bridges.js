
// Set appropriate center location / zoom level to show all five (experiment)
let goldenGateBridgeCoordinates = [	37.8199, -122.4783]
let zoomLevel = 7

let map = L.map('bridges-map').setView(goldenGateBridgeCoordinates, zoomLevel)

// What exactly does this do again? Re-watch example
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// Put data set for bridges into an object array
bridges =  [
    {"name": "Verrazano-Narrows Bridge", "City, State": "New York, NY", "span": 1298.4, "coordinates": [40.6066, -74.0447] }, 
    {"name": "Golden Gate Bridge", "City, State": "San Francisco and Marin, CA", "span": 1280.2, "coordinates": [37.8199, -122.4783] }, 
    {"name": "Mackinac Bridge", "City, State": "Mackinaw and St Ignace, MI", "span": 1158.0, "coordinates": [45.8174, -84.7278] }, 
    {"name": "George Washington Bridge", "City, State": "New York, NY & New Jersey, NJ", "span": 1067.0, "coordinates": [40.8517, -73.9527] }, 
    {"name": "Tacoma Narrows Bridge", "City, State": "Tacoma and Kitsap, WA", "span": 853.44, "coordinates": [47.2690, -122.5517] }, 
]

// Loop over the array to create markers & popups 
// Don't create separate markers in your code (? meaning what)
// Place a marker at each bridge locations
// Each marker should have a popup: bridge's name, span length
// Use HTML to format information neatly
bridges.forEach(function(bridge) {
    let markerText = `${bridge.name}<br>${bridge.span}`
    L.marker(bridge.coordinates).bindPopup(markerText).addTo(map)
 
})

// TODO Optional E.C. Instead of default marker, draw a bridge icon at locations
// Tutorial: https://www.flaticon.com/free-icon/bridge_183412
// Examine bridge data array; use JS to figure out which bridge is longest
// Draw the marker for this bridge in a different color
// You can change colors of an icon if you register for a Flaticon account


// Example loop from previous college map program
campuses.forEach(function(collegeCampus) {
    let markerText = `${collegeCampus.name}<br><a href="${collegeCampus.website}">Website</a>`
    L.marker(collegeCampus.coordinates).bindPopup(markerText).addTo(map)
})

// Individual map marker add example
let normandaleCoordinates = [44.8297, -93.3312]
let nomrandaleMarker = L.marker(normandaleCoordinates)
    .bindPopup('Normandale College<br><a href="https://normandale.edu">Website</a>')
    .addTo(map)



// TODO Part 3- Use dataset (bridge list in array above) to create a Chart.js
// bar chart of the bridge names and span legnths
// You can draw the chart on the same page as the map, or make a new page
// Can you use the array you created i part 2 to avoid typing the same data again?

// Enable GitHub pages for repository so all pages have live versions
// Submit with a link to your GITHUB repository with all files
// DIRECT WORKING links to the live pages on GitHub
