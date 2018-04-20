const Vue = require("nativescript-vue");
const utils = require("utils/utils");
const BackGroudService = require("../services/BackGroudService");
const GeoLocationService = require('../services/GeoLocationService');

module.exports = {
  methods: {
    onPageLoaded: function () {
      var context = utils.ad.getApplicationContext();
      var intent = new android.content.Intent(context, com.something.BackGroudService.class);
      context.startService(intent);
  },
    testFun: GeoLocationService.one,
    enableLocationServices: GeoLocationService.enableLocationServices,
    showLocation: GeoLocationService.showLocation,
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

  template:   
  `
    <Page class="page">
      <ActionBar title="Home" class="action-bar" />
      <ScrollView>
        <StackLayout class="home-panel">
          <StackLayout>
          <Button text="Show location" @tap="enableLocationServices" />
          <Button text="onPageLoaded" @tap="onPageLoaded" />
          <Button text="one" @tap="testFun" />
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
