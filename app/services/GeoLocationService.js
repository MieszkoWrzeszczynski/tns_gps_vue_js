const Toast = require("nativescript-toast");
const geoLocation = require("nativescript-geolocation");
const enums_1 = require("tns-core-modules/ui/enums");

const GeoLocationService = {
    one: function () {
        var that = this;
        geoLocation.enableLocationRequest().then(function () {
            that.id = geoLocation.watchLocation(function (loc) {
                if (loc) {
                    var toast = Toast.makeText('Geolocation: ' + loc.latitude + ' ' + loc.longitude);
                    toast.show();
                    console.log('Geolocation: ' + loc.latitude + ' ' + loc.longitude);
                }
            }, function (e) {
                console.log("Geolocation watchLocation error: " + (e.message || e));
            }, {
                    desiredAccuracy: enums_1.Accuracy.high,
                    updateDistance: 0.1,
                    updateTime: 30000,
                    minimumUpdateTime: 100
                });
        }, function (e) {
            console.log("Geolocation enableLocationRequest error: " + (e.message || e));
        });

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
    showLocation: function () {
        geoLocation.watchLocation(location => {
            this.currentGeoLocation = location;
            console.log(location.latitude, location.longitude);
            console.log('POST here');
        }, error => {
            alert(error);
        }, {
                desiredAccuracy: 1,
                updateDistance: 0,
                minimumUpdateTime: 100 * 1
            });
    },
}

module.exports = GeoLocationService;



