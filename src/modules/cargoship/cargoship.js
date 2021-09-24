function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3, //starting zoom on map
        center: { lat: 20, lng: 20 }, //starting image on map
        mapTypeId: "satellite", //"terrain"
    });
    const flightPlanCoordinates = [
        { lat: 29.90979, lng: -90.12018 }, //New Orleans gate, USMSY
        { lat: 19.709285, lng: -51.199945 }, //random point
        { lat: 36.509581, lng: -14.656412 }, //random point
        { lat: 30.57277778, lng: 32.49194444 }, //Suez canal
        { lat: -2.254070, lng: 77.930056 }, //random point
        { lat: 14.406407, lng: 132.652297 }, //random point
        { lat: 38.96904, lng: 117.73725 }, //Tianjin gate, CNTSN
    ];
    const flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
  
    flightPath.setMap(map);
  }