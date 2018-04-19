Object.defineProperty(exports, "__esModule", { value: true });
var Toast = require("nativescript-toast");
var geolocation = require("nativescript-geolocation");
var enums_1 = require("tns-core-modules/ui/enums");
var application = require("tns-core-modules/application");
const GeoLocationService = require('./GeoLocationService')


android.app.Service.extend("com.something.BackGroudService", {
    onStartCommand: function (intent, flags, startId) {
        this.super.onStartCommand(intent, flags, startId);
        return android.app.Service.START_STICKY;
    },

    onCreate: function () {
        console.log('onCreate method');
        GeoLocationService.enableLocationTap();
        GeoLocationService.showLocation();
  /*      var that = this;
        geolocation.enableLocationRequest().then(function () {
            that.id = geolocation.watchLocation(function (loc) {
                if (loc) {
                    var toast = Toast.makeText('Background Location: ' + loc.latitude + ' ' + loc.longitude);
                    toast.show();
                    console.log('ES6 Background Location: ' + loc.latitude + ' ' + loc.longitude);
                    console.log(loc);
                }
            }, function (e) {
                console.log("Background watchLocation error: " + (e.message || e));
            }, {
                    desiredAccuracy: enums_1.Accuracy.high,
                    updateDistance: 0.1,
                    updateTime: 30000,
                    minimumUpdateTime: 100
                });
        }, function (e) {
            console.log("Background enableLocationRequest error: " + (e.message || e));
        });

*/

    },

    onBind: function (intent) {
        console.log("##onBind NOT YET IMPLEMENTED");
    }
})

module.exports = {}