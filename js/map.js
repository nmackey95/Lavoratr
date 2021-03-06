

jQuery(document).ready(function() {
  
  venue_latlng = [36.158619, -95.99220514297485];
  
  
  //satellite
  // map = L.mapbox.map('my_arbitrary_id', 'jdungan.map-y7hj3ir7').setView(venue_latlng,16);
  //200OK
  map = L.mapbox.map('my_arbitrary_id', 'jdungan.map-rb58pj4k').setView(venue_latlng,16);

  var distWatchID,
      posOptions = {enableHighAccuracy: true},
      user_marker = L.userMarker([0,0], {pulsing:true, accuracy:100,smallIcon:true}).addTo(map),
      new_position = function(pos) {
          var pos_accuracy = pos.coords.accuracy;
          map.user_position = new L.LatLng(pos.coords.latitude, pos.coords.longitude);
          user_marker.setLatLng(map.user_position);
          user_marker.setAccuracy(pos_accuracy);
          map.setView(map.user_position,18)

      },
      appPosFail = function (err) {
          if (err){
              console.warn('ERROR(' + err.code + '): ' + err.message);
          }
      };

  distWatchID = navigator.geolocation.watchPosition(new_position, appPosFail, posOptions);       


});
  
  
