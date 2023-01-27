# Sample with cordova-plugin-statusbar

Run:
`npm install`
`npm start`

To run on Android call `npm run run`

The `cordova-plugin-statusbar` plugin will use a default value of:
`<preference name="StatusBarOverlaysWebView" value="true" />`

However, on Android 13 this places the web view behind visible areas and you must specify:
`<preference name="StatusBarOverlaysWebView" value="false" />`

The method `this.statusBar.overlaysWebView(false);` will intermittently work and it is documented in [this issue](https://github.com/apache/cordova-plugin-statusbar/issues/158).
