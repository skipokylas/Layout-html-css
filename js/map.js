 function initMap() {
        var uluru = {lat:  49.843685, lng: 24.023840};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru,
          scrollwheel: false

        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
