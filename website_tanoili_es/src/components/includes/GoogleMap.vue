<template>
  <div class="mapouter">
    <div class="gmap_canvas">
      <iframe width="100%" height="500" id="gmap_canvas"
              src="https://maps.google.com/maps?q=Blvd%20Garcia%20de%20Le%C3%B3n%201685%20int%20301%20Col%20Chapultepec%20oriente%2058260%20Morelia%20Michoacan&t=&z=16&ie=UTF8&iwloc=&output=embed"
              frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoogleMap",
    data() {
      return {
        // default to Montreal to keep it simple
        // change this to whatever makes sense
        center: {lat: 19.688602, lng: -101.163447},
        markers: {position:{lat: 19.688602, lng: -101.163447}},
        places: [],
        currentPlace: {lat: 19.688602, lng: -101.163447},
        mapStyles: {
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: true,
          disableDefaultUi: true,
          mapTypeControl: true,
          styles: [
            {
              "featureType": "administrative",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#444444"
                }
              ]
            },
            {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [
                {
                  "color": "#f2f2f2"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "all",
              "stylers": [
                {
                  "saturation": -100
                },
                {
                  "lightness": 45
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "all",
              "stylers": [
                {
                  "visibility": "simplified"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "visibility": "on"
                },
                {
                  "color": "#544b4b"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#898282"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#898282"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "all",
              "stylers": [
                {
                  "color": "#e0e0e0"
                },
                {
                  "visibility": "on"
                }
              ]
            }
          ]
        }
      };
    },

    mounted() {
      //this.geolocate();
    },

    methods: {
      // receives a place object via the autocomplete component
      setPlace(place) {
        this.currentPlace = place;
      },
      addMarker() {
        if (this.currentPlace) {
          const marker = {
            lat: this.currentPlace.geometry.location.lat(),
            lng: this.currentPlace.geometry.location.lng()
          };
          this.markers.push({position: marker});
          this.places.push(this.currentPlace);
          this.center = marker;
          this.currentPlace = null;
        }
      },
      geolocate: function () {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      }
    }
  }
  // documentacion para google maps
  //https://developers.google.com/maps/documentation/javascript/adding-a-google-map?hl=es
  // documentacion de vue2-google-maps
  // https://www.npmjs.com/package/vue2-google-maps
</script>

<style>

</style>
