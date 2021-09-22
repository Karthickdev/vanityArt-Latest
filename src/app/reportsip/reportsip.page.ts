import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { ApiserviceService } from '../apiservice.service';
// import { DatePicker } from '@ionic-native/date-picker';

@Component({
  selector: 'app-reportsip',
  templateUrl: './reportsip.page.html',
  styleUrls: ['./reportsip.page.scss'],
})
export class ReportsipPage implements OnInit {

  public reportpage: FormGroup;
  public reportpageMobile: FormGroup;

  userId: any;
  respData: any;
  reportresults: any;
  reportscanitemlist: any;
  orderStatus: any;
  povalue: any;
  startdate: string;
  enddate: string;
  starttime: string;
  sdate: String = new Date().toLocaleDateString();
  edate: any;
  changevalue: any;
  frmdate: string;
  todate: string;
  warehouselist: any;
  warehouseid: any;
  warehouseval: any = "hi";
  wareID: any;
  selectedWarehouse: any;

  constructor(
    private formbuilder: FormBuilder,
    private routeto: Router,
    private Vanityartservice: ApiserviceService,
    private routerOutlet: IonRouterOutlet
    // private datePicker: DatePicker,
  ) {
    this.reportpage = this.formbuilder.group({
      status: ['40', Validators.compose([Validators.required])],
      reportorder: ['', Validators.compose([Validators.required])],
      carrier: ['', Validators.compose([Validators.required])],
      warehouse: ['', Validators.compose([Validators.required])],
      ordercreatedfrom: ['', Validators.compose([Validators.required])],
      ordercreatedto: ['', Validators.compose([Validators.required])]
    });

    this.reportpageMobile = this.formbuilder.group({
      status: ['40', Validators.compose([Validators.required])],
      reportorder: ['', Validators.compose([Validators.required])],
      carrier: ['', Validators.compose([Validators.required])],
      warehouse: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.frmdate = "OrderReceived From";
    this.todate = "OrderReceived To";

    this.userId = JSON.parse(localStorage.getItem(("Id")));
    // this.getOrderStatusList();
    this.getWarehouseList();
    this.reportpage.controls['warehouse'].setValue(this.selectedWarehouse);
    let date = new Date();
    this.edate = new Date(date.setDate(date.getDate() + 1)).toLocaleDateString();
    this.routerOutlet.swipeGesture = false;
  }
  onSelectedWarehouse(){
    this.reportpage.controls['warehouse'].setValue(this.selectedWarehouse);
  }
  formreset() {
    let date = new Date();
    console.log(this.reportpage.value);
    this.reportpage.reset();
    setTimeout(() => {
      this.reportresults = [];
      this.sdate = date.toLocaleDateString();
      this.edate = new Date(date.setDate(date.getDate() + 1)).toLocaleDateString();
      this.reportpage.patchValue({ status: '40' });
      this.reportpage.patchValue({ warehouse: '1000' });
    }, 300);
  }
  //Method to go back to home page
  backToHome() {
    this.routeto.navigate(['/menuitems']);
  }

  getreports() {

    this.reportresults = [];
    var now = new Date();
    var sdate = now.toLocaleDateString();
    var stime = now.toLocaleTimeString();
    this.starttime = stime.split(" ")[0];
    this.startdate = this.reportpage.value.ordercreatedfrom;
    this.enddate = this.reportpage.value.ordercreatedto;


    var repporting = this.Vanityartservice.baseUrl + this.Vanityartservice.getReport;
    let dataParam = {
      "Order": this.reportpage.value.reportorder,
      "StatusEnum": this.reportpage.value.status,
      "wareHouseid": this.reportpage.value.warehouse ? this.reportpage.value.warehouse : '',
      "CarrierEnum": this.reportpage.value.carrier,
      "OrderCreatedFromDate": this.startdate.replace('+05:30', ' ').replace("T", " "),
      "OrderCreatedToDate": this.enddate.replace('+05:30', ' ').replace("T", " ")
    };
    console.log("resports", dataParam)

    this.Vanityartservice.present();
    this.Vanityartservice.ajaxCallService(repporting, "post", dataParam).then(resp => {
      this.Vanityartservice.dismiss();
      if (Array.isArray(resp)) {
        this.reportresults = resp;
        // console.log("isArray");
        // console.log("resp", resp[0]['batchFilename'].split("_")[1] + "_" + resp[0]['batchFilename'].split("_")[2])
        // var tempArr = [];
        // for (let idx of this.reportresults) {
        //   this.povalue = idx['batchFilename'].split("_")[1] + "_" + idx['batchFilename'].split("_")[2]
        //   tempArr.push(this.povalue);
        //   console.log("reporttss", tempArr)
        // }

      } else {
        // console.log("isNotArray");
        // if (resp['message'] == 'No data found for the given search critiera.') {
        //   this.reportresults = [];
        //   this.Vanityartservice.PresentToast(resp['message'], "danger");
        // } else if (resp['status'] == 'Success') {
        //   this.Vanityartservice.PresentToast(resp['message'], "danger");

        // }
        this.reportresults = [];
        this.Vanityartservice.PresentToast(resp['message'], "danger");
      }

    }).catch(err =>{
      this.Vanityartservice.dismiss();
    });
  }

  reportssubmit() {

    var exportrepporting = this.Vanityartservice.baseUrl + this.Vanityartservice.exportreports;
    let dataParam = {
      "Order": this.reportpage.value.reportorder,
      "StatusEnum": this.reportpage.value.status,
      "wareHouseid": this.reportpage.value.warehouse,
      "CarrierEnum": this.reportpage.value.carrier,
      "Userid": this.userId,
      "OrderCreatedFromDate": this.startdate,
      "OrderCreatedToDate": this.enddate
    };
    console.log(dataParam)
    this.Vanityartservice.present();
    this.Vanityartservice.ajaxCallService(exportrepporting, "post", dataParam).then(resp => {
      this.respData = resp;
      console.log("res", this.respData);
      if (resp['status'] = "Success") {
        this.Vanityartservice.PresentToast(resp['message'], "success");

      }
      this.Vanityartservice.dismiss();
    })
  }

  //Method to get order status lists
  getOrderStatusList() {
    let url = this.Vanityartservice.baseUrl + this.Vanityartservice.orderList;
    this.Vanityartservice.present();
    this.Vanityartservice.ajaxCallService(url, "post", '').then(resp => {
      this.respData = resp;
      console.log("res", this.respData);
      this.orderStatus = resp;
      this.orderStatus.map((item, i) => {
        if (i == 0) {
          item['selected'] = true;
        } else {
          item['selected'] = false;
        }
      })
      this.orderStatus.push({ enumName: 'All', enumValue: '0', selected: false });
      this.orderStatus.push({ enumName: 'Ready to Ship', enumValue: '40', selected: false });
      this.orderStatus.push({ enumName: 'Shipped', enumValue: '50', selected: false });
      console.log(this.orderStatus);
      this.Vanityartservice.dismiss();
    })
  }


  onStatusChange(svalue) {
    this.changevalue = svalue;
    console.log("Values", this.changevalue)
    if (svalue == 50) {
      this.frmdate = "OrderShipped From";
      this.todate = "OrderShipped To";
    } else if (svalue == 40) {
      this.frmdate = "OrderReceived From";
      this.todate = "OrderReceived To";
    } else if (svalue == 0) {
      this.frmdate = "OrderReceived From";
      this.todate = "OrderReceived To";
    }

  }


  //Method to get Warehouse List

  getWarehouseList() {

    let url = this.Vanityartservice.baseUrl + this.Vanityartservice.warehouseList;
    this.Vanityartservice.ajaxCallService(url, "post", '').then(resp => {
      this.warehouselist = resp;
      console.log(resp);
      this.warehouseval = resp[0]['warehouseCode'];
      this.reportpage.patchValue({ warehouse: resp[0]['id'] });
      console.log(this.warehouseval)
      for (let idx of this.warehouselist) {
        if (idx['warehouseCode'] == this.warehouseval) {
          this.wareID = idx['id'];
        }
        console.log(this.wareID)
      }
    }

    )

  }



}
