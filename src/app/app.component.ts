import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, private statusBar: StatusBar) {
    this.init();
  }

  async init() {
    await this.platform.ready();
    console.log('hiding splash');
    (navigator as any).splashscreen.hide();
    console.log('splash is hidden');    
    //this.statusBar.overlaysWebView(false);
  }
}
