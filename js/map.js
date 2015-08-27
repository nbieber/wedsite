var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 43.0552035, lng: -73.803277},
    zoom: 10
  });
   
    var markers = [new google.maps.Marker({
        position: new google.maps.LatLng(43.055427, -73.803266),
        map: map,
        title: 'Hall of Springs',
        icon: "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|6f749e"
    }),

    new google.maps.Marker({
        position: new google.maps.LatLng(43.057387, -73.798177),
        map: map,
        title: 'Gideon Putnam',
        icon: "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|fde6b1"
    }),

    new google.maps.Marker({
        position: new google.maps.LatLng(43.043205,-73.791292),
        map: map,
        title: 'Best Western Plus Park Inn',
        icon: "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|d0a8b9"
    }),

    new google.maps.Marker({
        position: new google.maps.LatLng(42.8681707,-73.7741394),
        map: map,
        title: 'The Holiday Inn Express & Suites Clifton Park',
        icon: "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|f8bbb1"
    })];

    attachPopup(markers[0], "Hall of Springs");
    attachPopup(markers[1], "Gideon Putnam");
    attachPopup(markers[2], "Best Western Plus Park Inn");
    attachPopup(markers[3], "The Holiday Inn Express & Suites Clifton Park");

    function attachPopup(marker, message) {
      var infowindow = new google.maps.InfoWindow({
        content: message
      });

      marker.addListener('click', function() {
        infowindow.open(marker.get('map'), marker);
      });
    }
}



// // When the window has finished loading create our google map below
// google.maps.event.addDomListener(window, 'load', init);

// function init() {
//     // Basic options for a simple Google Map
//     // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//     var mapOptions = {
//         // How zoomed in you want the map to start at (always required)
//         zoom: 16,

//         // The latitude and longitude to center the map (always required)
//         center: new google.maps.LatLng(43.055427, -73.803266), // Hall of Springs

//         // How you would like to style the map. 
//         // This is where you would paste any style found on Snazzy Maps.
//         styles: [{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#FFFAF0"}]},{"featureType":"water","stylers":[{"color":"#d9edf7"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"lightness":40}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"visibility":"on","color":"#c5dac6"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#CCAA88"},{"lightness":40},]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#EEEEEE"}]},{"featureType":"road","stylers":[{"visibility":"simplified"},{"color":"#FF0000"},{"gamma":9}]},{"featureType":"road.highway","stylers":[{"visibility":"on"},{"color":"#FF0000"},{"gamma":8}]},{"featureType":"road.highway.controlled_access","stylers":[{"visibility":"on"},{"color":"#FF0000"},{"gamma":4}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#DDDDDD"},]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#CCCCCC"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#AAAAAA"},{"gamma":4}]}]
//     };

//     // Get the HTML DOM element that will contain your map 
//     // We are using a div with id="map" seen below in the <body>
//     var mapElement = document.getElementById('map');

//     // Create the Google Map using our element and options defined above
//     var map = new google.maps.Map(mapElement, mapOptions);

//     // Let's also add a marker while we're at it
//     var marker = new google.maps.Marker({
//         position: new google.maps.LatLng(43.055427, -73.803266),
//         map: map,
//         title: 'Hall of Springs'
//     });

//     new google.maps.Marker({
//         position: new google.maps.LatLng(43.057387, -73.798177),
//         map: map,
//         title: 'Gideon Putnam'
//     });

// }