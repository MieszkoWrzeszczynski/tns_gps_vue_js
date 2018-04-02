const Vue = require("nativescript-vue");
const geoLocation = require("nativescript-geolocation");
const mapbox = require("nativescript-mapbox");
const platform = require("platform");
const isIOS = platform.device.os === platform.platformNames.ios;

module.exports = {
  methods: {
    enableLocationServices: function () {
      geoLocation.isEnabled().then(enabled => {
        if (!enabled) {
          geoLocation.enableLocationRequest().then(() => this.showLocation());
        } else {
            this.showLocation();
        }
      });
    },
    showLocation: function () {
      geoLocation.watchLocation(location => {
          this.currentGeoLocation = location;
          console.log(location.latitude,location.longitude);
          console.log(location.latitude,location.longitude);
          fetch('http://192.168.1.111:3000/locations', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  location
              })
          })
      }, error => {
        alert(error);
      }, {
          desiredAccuracy: 1,
          updateDistance: 0,
          minimumUpdateTime: 100 * 1
        });
    },
  },
  data() {
    return {
      currentGeoLocation: {
        latitude: null,
        longitude: null,
        altitude: null,
        direction: null
      },
    }
  },

  template: `
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:map="nativescript-mapbox" navigatingTo="navigatingTo">
  <StackLayout>
   <Button text="Show location" @tap="enableLocationServices" />
    <Label text="Nice map, huh!" class="title"/>
    <ContentView height="240" width="240">
      <!-- IMPORTANT: plugin version 3 uses :MapboxView, lower versions use :Mapbox -->
      <map:MapboxView
          accessToken="pk.eyJ1IjoibWllc3prbyIsImEiOiJjamZoOW5kZGUzNnB2M3VvMW1jaHAwdTc2In0.DsuHqmKEPQSbGbFIddNuxA"
          mapStyle="traffic_night"
          latitude="52.3702160"
          longitude="4.8951680"
          zoomLevel="3"
          showUserLocation="true"
          mapReady="onMapReady">
      </map:MapboxView>
    </ContentView>
  </StackL
    // <Page class="page">
//       <ActionBar title="Home" class="action-bar" />
//       <ScrollView>
//         <StackLayout class="home-panel">
//           <!--Add your page content here-->
// <StackLayout>
//   <Button text="Show location" @tap="enableLocationServices" />
//             <StackLayout :visibility="currentGeoLocation.latitude ? 'visible' : 'collapsed'">
//               <Label :text="'Latitude: ' + currentGeoLocation.latitude" />
//               <Label :text="'Longitude: ' + currentGeoLocation.longitude" />
//               <Label :text="'Altitude: ' + currentGeoLocation.altitude" />
//               <Label :text="'Direction: ' + currentGeoLocation.direction" />
//             </StackLayout>
// <ContentView height="240" width="240">
//       <!-- IMPORTANT: plugin version 3 uses :MapboxView, lower versions use :Mapbox -->

//           </StackLayout>
//         </StackLayout>
//       </ScrollView>
//     </Page>
  `
};
