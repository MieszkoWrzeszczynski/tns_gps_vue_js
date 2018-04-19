var geolocation = require("nativescript-geolocation");

var Toast = require("nativescript-toast");

function enableLocationTap(args) {
    geolocation.isEnabled().then(function (isEnabled) {
       if (!isEnabled) {
           geolocation.enableLocationRequest().then(function () {
                console.log('geo locs ON');
           }, function (e) {
               console.log("Error: " + (e.message || e));
           });
       }
   }, function (e) {
       console.log("Error: " + (e.message || e));
   });
}
exports.enableLocationTap = enableLocationTap;

function showLocation() {
    geoLocation.watchLocation(location => {
        this.currentGeoLocation = location;
        console.log(location.latitude,location.longitude);
        console.log('POST here');
        var toast = Toast.makeText('Background Location: ' + loc.latitude + ' ' + loc.longitude);
        toast.show();
    }, error => {
      alert(error);
    }, {
        desiredAccuracy: 1,
        updateDistance: 0,
        minimumUpdateTime: 100 * 1
      });
  }

exports.showLocation = showLocation;
module.exports = {}
