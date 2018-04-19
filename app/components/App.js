const Vue = require("nativescript-vue");
const geoLocation = require("nativescript-geolocation");


const BackGroudService = require("../services/BackGroudService");
const utils = require("utils/utils");
const GeoLocationService = require('../services/GeoLocationService');




module.exports = {
  methods: {
    onPageLoaded: function () {
      var context = utils.ad.getApplicationContext();
      var intent = new android.content.Intent(context, com.something.BackGroudService.class);
  
      context.startService(intent);
  },
    enableLocationServices: function () {
      geoLocation.isEnabled().then(enabled => {
        if (!enabled) {
          geoLocation.enableLocationRequest().then(() => this.showLocation());
        } else {
            this.showLocation();
        }
      });
    },
    showLocation: GeoLocationService.showLocation,
    
    
    /*
    showLocation: function () {
      geoLocation.watchLocation(location => {
          this.currentGeoLocation = location;
          console.log(location.latitude,location.longitude);
          console.log('POST here');

      }, error => {
        alert(error);
      }, {
          desiredAccuracy: 1,
          updateDistance: 0,
          minimumUpdateTime: 100 * 1
        });
    },*/
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
    <Page class="page">
      <ActionBar title="Home" class="action-bar" />
      <ScrollView>
        <StackLayout class="home-panel">
          <StackLayout>
          <Button text="Show location" @tap="enableLocationServices" />
          <Button text="onPageLoaded" @tap="onPageLoaded" />



          
            <StackLayout :visibility="currentGeoLocation.latitude ? 'visible' : 'collapsed'">
              <Label :text="'Latitude: ' + currentGeoLocation.latitude" />
              <Label :text="'Longitude: ' + currentGeoLocation.longitude" />
              <Label :text="'Altitude: ' + currentGeoLocation.altitude" />
              <Label :text="'Direction: ' + currentGeoLocation.direction" />
            </StackLayout>
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </Page>
  `
};
