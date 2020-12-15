"use strict";

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 49.343,
      lng: 8.47
    },
    zoom: 12
  });
}