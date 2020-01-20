cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-facebookads/www/FacebookAds.js",
        "id": "cordova-plugin-facebookads.FacebookAds",
        "pluginId": "cordova-plugin-facebookads",
        "clobbers": [
            "window.FacebookAds"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-extension": "1.5.4",
    "cordova-facebook-audnet-sdk": "4.26.2",
    "cordova-plugin-facebookads": "4.23.2"
}
// BOTTOM OF METADATA
});