Object.defineProperty(exports, "__esModule", { value: true });
// var Toast = require("nativescript-toast");
// var geolocation = require("nativescript-geolocation");
// var enums_1 = require("tns-core-modules/ui/enums");
// var application = require("tns-core-modules/application");
 const GeoLocationService = require('./GeoLocationService')


android.app.Service.extend("com.something.BackGroudService", {
    onStartCommand: function (intent, flags, startId) {
        this.super.onStartCommand(intent, flags, startId);
        return android.app.Service.START_STICKY;
    },

    onCreate: function () {
        console.log('onCreate method');
        GeoLocationService.enableLocationServices();
    },

    onBind: function (intent) {
        console.log("##onBind NOT YET IMPLEMENTED");
    }
})

module.exports = {}