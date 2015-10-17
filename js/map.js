/* global google */

var map;

function initMap() {
    'use strict';
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 43.0552035, lng: -73.803277},
        zoom: 11
    });
    
    var markers = [new google.maps.Marker({
        position: new google.maps.LatLng(43.055427, -73.803266),
        map: map,
        title: 'Hall of Springs',
        icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|6f749e'
    }),

    new google.maps.Marker({
        position: new google.maps.LatLng(43.057387, -73.798177),
        map: map,
        title: 'Gideon Putnam',
        icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|fde6b1'
    }),

    new google.maps.Marker({
        position: new google.maps.LatLng(43.043205,-73.791292),
        map: map,
        title: 'Best Western Plus Park Inn',
        icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|d0a8b9'
    }),

    new google.maps.Marker({
        position: new google.maps.LatLng(42.8681707,-73.7741394),
        map: map,
        title: 'The Holiday Inn Express & Suites Clifton Park',
        icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|f8bbb1'
    })];

    var infowindows = [];

    attachPopup(markers[0], "<div class='hotel-panel' >Hall of Springs</div><br>Ceremony and Reception held here!", 0);
    attachPopup(markers[1], "<div class='hotel-panel'>Gideon Putnam</div>518-584-3000<br>$199 - standard room<br>$299 - suite<br>$359 - Putnam Suite<br><br>Use promo code BIEBSTEI<br><a href='http://www.gideonputnam.com/'>http://www.gideonputnam.com/</a>", 1);
    attachPopup(markers[2], "<div class='hotel-panel'>Best Western Plus Park Inn</div>518-584-2350<br><br>$149.95/night<br><br>(No special promo code necessary)", 2);
    attachPopup(markers[3], "<div class='hotel-panel'>The Holiday Inn Express & Suites Clifton Park</div>518-579-3000<br><br>$124 - Sunday night<br>$154 - Saturday night<br><br>Say you're with the Bieber-Stein wedding", 3);

    function attachPopup(marker, message, hotelnum) {
        var infowindow = new google.maps.InfoWindow({
            content: message
        });
        infowindows.push(infowindow);

        function showPopup() {
            for (var i = 0; i < infowindows.length; i++) {
                infowindows[i].close();
            }
            infowindow.open(marker.get('map'), marker);
        }

        marker.addListener('click', showPopup);

        $(".hotel" + hotelnum).click(showPopup);
    }
}

