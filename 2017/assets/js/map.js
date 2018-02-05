function initMap() {
  const venue = {lat: 51.5251871, lng: -0.0961995};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: venue,
    zoom: 15,
    scrollwheel: false
  });

  var marker = new google.maps.Marker({
    position: venue,
    map: map
  });
}
