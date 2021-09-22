import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-menuitems',
  templateUrl: './menuitems.page.html',
  styleUrls: ['./menuitems.page.scss'],
})
export class MenuitemsPage implements OnInit {

  constructor(
    private routeto: Router,
    private Vanityartservice: ApiserviceService,
    private routerOutlet: IonRouterOutlet
  ) {

  }

  ngOnInit() {
    let id = JSON.parse(localStorage.getItem("Id"));
    this.routerOutlet.swipeGesture = false;
  }
  gotohomepage() {
    this.routeto.navigate(["/login"]);
  }
  gotobolscan() {
    this.routeto.navigate(["/bolscanning"]);
  }
  gototracking() {
    this.routeto.navigate(["/tracking"]);
  }
  gotoreports() {
    this.routeto.navigate(["/reportsip"]);
  }
  gotoreturns() {
    this.routeto.navigate(["/scanreturns"]);
  }
}
