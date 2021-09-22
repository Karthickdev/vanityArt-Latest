import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
    //version: string = "0.1.1"; //UAT
    version: string = "0.1.1"; //PROD
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private Vanityartservice: ApiserviceService
  ) {
    this.initializeApp();
    this.getErrorMessages();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  //Method to get Error messages
  getErrorMessages() {
    let url = this.Vanityartservice.baseUrl + this.Vanityartservice.errorMsg;
    let mode = this.Vanityartservice.baseUrl.includes("https") ? "PROD" : "UAT";
    this.Vanityartservice.ajaxCallService(url, "post", '').then(resp => {
      console.log(resp);
      this.Vanityartservice.errorMessages = resp['messages'];
      localStorage.setItem("Message", JSON.stringify(resp['messages']));
      if (mode == "UAT") {
        if (resp['appVersionUAT'] != this.version) {
          this.Vanityartservice.presentAlert();
          this.Vanityartservice.versionChecked = false;
        } else {
          this.Vanityartservice.versionChecked = true;
        }
      } else {
        if (resp['appVersionPRD'] != this.version) {
          this.Vanityartservice.presentAlert();
          this.Vanityartservice.versionChecked = false;
        } else {
          this.Vanityartservice.versionChecked = true;
        }
      }
    })
  }
}
