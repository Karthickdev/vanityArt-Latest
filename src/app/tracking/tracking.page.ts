import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { AlertController, IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
})
export class TrackingPage implements OnInit {
  public trackingordr: FormGroup;

  @ViewChild('tracking', { static: false }) tracking;
  @ViewChild('itemNo', { static: false }) itemNo;
  @ViewChild('serialNo', { static:false}) serialNo;

  userId: any;
  respData: any;
  enterEvt: boolean = false;
  scanItemList: any;
  trackingList: unknown;
  orderno: any;
  shipdate: any;
  customername: any;
  eventLog: String = "";
  trackingscaneditems: any;
  autoSave: boolean = false;
  itemslist: any;
  trackingnumber: any;
  d: Date;
  n: string;
  errOrder: any;
  searched: any;
  message: any = [];
  enableSerialNo:boolean = false;
  byPassedItem:any;
  scaneditems:any;
  serialNumbers:any[]=[];
  serialData:any;
  itemlist:any;
  itemMatch: boolean = false;
  dataSource: any;
  enableSaveBtn:boolean = false;
  constructor(
    private formbuilder: FormBuilder,
    private routeto: Router,
    private Vanityartservice: ApiserviceService,
    private alert: AlertController,
    private routerOutlet: IonRouterOutlet
  ) {
    this.trackingordr = this.formbuilder.group({
      tracking: ['', Validators.compose([Validators.required])],
      itemvalues: ['',],
      serialNo: ['']
    });
    this.message = JSON.parse(localStorage.getItem(("Message")));

  }
  validation_messages: any = {
    'tracking': [
      // { type: 'required', message: this.message[3] },
      { type: 'required', message: 'Tracking Number cannot be empty or null' },
      { type: 'pattern', message: 'Only numbers and characters are allowed' },
    ],

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.tracking.setFocus();
    }, 400);
  }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem(("Id")));
    this.routerOutlet.swipeGesture = false;
  }
  scanOrder() {
    let value = this.trackingordr.controls['tracking'].value;
    this.trackingSearch(value);
  }

  //order search via enter key
  handleScanner(evt) {
    setTimeout(() => {
      let value = evt.target.value;
      this.trackingSearch(value);
    }, 800);
  }

  //items search via enter key
  handleitemScanner(evt) {
    setTimeout(() => {
      let value = evt.target.value;
      let isItemAvailable = this.scanItemList.filter(item => item.itemUpc == value.toUpperCase());
      if(isItemAvailable.length > 0){
        this.itemssearch(value);
      }else{
        this.Vanityartservice.PresentToast('Item # does not match with any items', 'danger');
      }
    }, 800);

  }

  handleserialNoScanner(evt){
      let value = evt.target.value;
      if(value.length == 11){
        this.trackingordr.controls['serialNo'].disable();
        this.serailNoScan(value)
      }
  }

  serailNoScan(value){
    if(this.itemMatch == true){
    let serialNo = value.toUpperCase();
    if(serialNo.length == 11){
      let url = this.Vanityartservice.baseUrl+this.Vanityartservice.serialScan
      let data = {
        "BOL": this.respData.trackingNumber,
        "order": this.orderno,
        "serialNumber": serialNo
      }
      this.Vanityartservice.present();
      this.Vanityartservice.ajaxCallService(url, "post", data).then(resp =>{
        this.serialData = resp
        if(this.serialData['status'] == 'Success'){
          this.Vanityartservice.dismiss();
          this.dataSource = this.serialData['dataSource'];
          if(this.trackingordr.value.itemvalues){
            this.scaneditems = this.trackingordr.value.itemvalues.toUpperCase();
          }
          if(this.scaneditems){
            for (var idx in this.scanItemList) {
              if (this.scanItemList[idx]['itemUpc'] && this.scanItemList[idx]['itemUpc'] == this.scaneditems) {
                if(this.scanItemList[idx]['scannedItems'] < this.scanItemList[idx]['itemQuantity']){
                  let isDuplicate = this.scanItemList[idx]['serialNumbers'].includes(serialNo)
                  let checkAllSerials = this.serialNumbers.includes(serialNo)
                  if(!isDuplicate && !checkAllSerials){
                    this.serialNumbers.push(serialNo)
                    this.scanItemList[idx]['serialNumbers'].push(serialNo)
                    this.scanItemList[idx]['scannedItems']++;
                    this.trackingordr.controls['itemvalues'].reset();
                    setTimeout(()=>{
                      this.itemNo.setFocus();
                    }, 200)
                    //this.trackingordr.controls['serialNo'].enable();
                    this.trackingordr.controls['serialNo'].reset();
                    // setTimeout(()=>{
                    //   this.serialNo.setFocus();
                    // },200)
                    if(this.scanItemList[idx]['scannedItems'] == this.scanItemList[idx]['itemQuantity']){
                      this.enableSerialNo = false
                      this.trackingordr.controls['itemvalues'].reset();
                      this.itemMatch = false
                      this.scanItemList[idx]['selected'] = false
                      this.scanItemList[idx]['isScanned'] = true
                      setTimeout(()=>{
                        this.itemNo.setFocus()
                      },200)
                      let checkItems = this.scanItemList
                      checkItems = checkItems.filter(item => item.scannedItems < item.itemQuantity)
                      if(this.autoSave && checkItems.length == 0){
                        setTimeout(()=>{
                          this.trackingsubmit()
                        },200)
                      }else if(!this.autoSave && checkItems.length == 0){
                        this.enableSaveBtn = true
                      }
                    }
                  }else{
                    this.trackingordr.controls['serialNo'].enable();
                    setTimeout(()=>{
                      this.serialNo.setFocus()
                    },100);
                    this.Vanityartservice.PresentToast('No duplicate serial number allowed across items', "danger");
                  }
                }else{
                  this.trackingordr.controls['itemvalues'].reset();
                  this.Vanityartservice.PresentToast('All quantities are scanned', "success");
                }
              }else if(this.scanItemList[idx]['itemName'] == this.scaneditems){
                if(this.scanItemList[idx]['scannedItems'] < this.scanItemList[idx]['itemQuantity']){
                  let isDuplicate = this.scanItemList[idx]['serialNumbers'].includes(serialNo)
                  let checkAllSerials = this.serialNumbers.includes(serialNo)
                  if(!isDuplicate && !checkAllSerials){
                    this.serialNumbers.push(serialNo)
                    this.scanItemList[idx]['serialNumbers'].push(serialNo)
                    this.scanItemList[idx]['scannedItems']++;
                    //this.trackingordr.controls['serialNo'].enable();
                    this.trackingordr.controls['itemvalues'].reset();
                    setTimeout(()=>{
                      this.itemNo.setFocus();
                    }, 200)
                    this.trackingordr.controls['serialNo'].reset();
                    // setTimeout(()=>{
                    //   this.serialNo.setFocus();
                    // },200)
                    if(this.scanItemList[idx]['scannedItems'] == this.scanItemList[idx]['itemQuantity']){
                      this.enableSerialNo = false
                      this.trackingordr.controls['itemvalues'].reset();
                      this.itemMatch = false
                      this.scanItemList[idx]['selected'] = false
                      this.scanItemList[idx]['isScanned'] = true
                      setTimeout(()=>{
                        this.itemNo.setFocus()
                      },200)
                      let checkItems = this.scanItemList
                      checkItems = checkItems.filter(item => item.scannedItems < item.itemQuantity)
                      if(this.autoSave && checkItems.length == 0){
                        setTimeout(()=>{
                          this.trackingsubmit()
                        },200)
                      }else if(!this.autoSave && checkItems.length == 0){
                        this.enableSaveBtn = true
                      }
                    }
                  }else{
                    this.trackingordr.controls['serialNo'].enable();
                    setTimeout(()=>{
                      this.serialNo.setFocus()
                    },100);
                    this.Vanityartservice.PresentToast('No duplicate serial number allowed across items', "danger");
                  }
                }else{
                  this.trackingordr.controls['itemvalues'].reset();
                  this.Vanityartservice.PresentToast('All quantities are scanned', "success");
                }
              }
            }
          }else{
            this.scaneditems = this.byPassedItem
            for (var idx in this.scanItemList) {
              if (this.scanItemList[idx]['itemUpc'] && this.scanItemList[idx]['itemUpc'] == this.scaneditems) {
                if(this.scanItemList[idx]['scannedItems'] < this.scanItemList[idx]['itemQuantity']){
                  let isDuplicate = this.scanItemList[idx]['serialNumbers'].includes(serialNo)
                  let checkAllSerials = this.serialNumbers.includes(serialNo)
                  if(!isDuplicate && !checkAllSerials){
                    this.serialNumbers.push(serialNo)
                    this.scanItemList[idx]['serialNumbers'].push(serialNo)
                    this.scanItemList[idx]['scannedItems']++;
                    //this.trackingordr.controls['serialNo'].enable();
                    //this.trackingordr.controls['itemvalues'].reset();
                    this.trackingordr.controls['itemvalues'].reset();
                    setTimeout(()=>{
                      this.itemNo.setFocus();
                    }, 200)
                    this.trackingordr.controls['serialNo'].reset();
                    // setTimeout(()=>{
                    //   this.serialNo.setFocus();
                    // },200)
                    if(this.scanItemList[idx]['scannedItems'] == this.scanItemList[idx]['itemQuantity']){
                      this.trackingordr.controls['serialNo'].reset();
                      this.itemMatch = false
                      this.enableSerialNo = false
                      this.scanItemList[idx]['selected'] = false
                      this.scanItemList[idx]['isScanned'] = true
                      setTimeout(()=>{
                        this.itemNo.setFocus()
                      },200)
                      let checkItems = this.scanItemList
                      checkItems = checkItems.filter(item => item.scannedItems < item.itemQuantity)
                      if(this.autoSave && checkItems.length == 0){
                        setTimeout(()=>{
                          this.trackingsubmit()
                        },200)
                      }else if(!this.autoSave && checkItems.length == 0){
                        this.enableSaveBtn = true
                      }
                    }
                  }else{
                    this.trackingordr.controls['serialNo'].enable();
                    setTimeout(()=>{
                      this.serialNo.setFocus()
                    },100);
                    this.Vanityartservice.PresentToast('No duplicate serial number allowed across items', "danger");
                  }
                }else{
                  this.trackingordr.controls['itemvalues'].reset();
                  this.Vanityartservice.PresentToast('All quantities are scanned', "success");
                }
              }else if(this.scanItemList[idx]['itemName'] == this.scaneditems){
                if(this.scanItemList[idx]['scannedItems'] < this.scanItemList[idx]['itemQuantity']){
                  let isDuplicate = this.scanItemList[idx]['serialNumbers'].includes(serialNo)
                  let checkAllSerials = this.serialNumbers.includes(serialNo)
                  if(!isDuplicate && !checkAllSerials){
                    this.serialNumbers.push(serialNo)
                    this.scanItemList[idx]['serialNumbers'].push(serialNo)
                    this.scanItemList[idx]['scannedItems']++;
                    // this.trackingordr.controls['serialNo'].enable();
                    // this.trackingordr.controls['itemvalues'].reset();
                    this.trackingordr.controls['itemvalues'].reset();
                    setTimeout(()=>{
                      this.itemNo.setFocus();
                    }, 200)
                    this.trackingordr.controls['serialNo'].reset();
                    // setTimeout(()=>{
                    //   this.serialNo.setFocus();
                    // },200)
                    if(this.scanItemList[idx]['scannedItems'] == this.scanItemList[idx]['itemQuantity']){
                      this.trackingordr.controls['serialNo'].reset();
                      this.itemMatch = false
                      this.enableSerialNo = false
                      this.scanItemList[idx]['selected'] = false
                      this.scanItemList[idx]['isScanned'] = true
                      setTimeout(()=>{
                        this.itemNo.setFocus()
                      },200)
                      let checkItems = this.scanItemList
                      checkItems = checkItems.filter(item => item.scannedItems < item.itemQuantity)
                      if(this.autoSave && checkItems.length == 0){
                        setTimeout(()=>{
                          this.trackingsubmit()
                        },200)
                      }else if(!this.autoSave && checkItems.length == 0){
                        this.enableSaveBtn = true
                      }
                    }
                  }else{
                    this.trackingordr.controls['serialNo'].enable();
                    setTimeout(()=>{
                      this.serialNo.setFocus()
                    },100);
                    this.Vanityartservice.PresentToast('No duplicate serial number allowed across items', "danger");
                  }
                }else{
                  this.trackingordr.controls['itemvalues'].reset();
                  this.Vanityartservice.PresentToast('All quantities are scanned', "success");
                }
              }
            }
          }
        }else if(this.serialData['status'] == 'Fail'){
          this.Vanityartservice.dismiss();
          this.trackingordr.controls['serialNo'].enable();
          this.Vanityartservice.PresentToast(this.serialData['message'], 'danger');
        }
      }).catch(err =>{
        this.Vanityartservice.dismiss();
        this.trackingordr.controls['serialNo'].enable();
        this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
      })
    }else{
      this.trackingordr.controls['serialNo'].enable();
      this.Vanityartservice.PresentToast('Serial Number must be 11 digits', "danger");
    }
    }else{
      this.trackingordr.controls['serialNo'].enable();
      this.itemNo.setFocus();
      this.Vanityartservice.PresentToast('No item has been scanned. Please scan an item before serial number scanning.', "danger");
    }
  }
  
  //Method to go back to home page
  backToHome() {
    let tracking = this.trackingordr.controls.tracking.value;
    if (tracking == "" || tracking == null) {
      this.routeto.navigate(['/menuitems']);
    } else {
      this.Vanityartservice.PresentToast("There is unsaved data in the form, either save or clear the form.", "danger");
    }
  }

  //Method to check if autoSave is on/off
  isChecked(evt) {
    let check = evt.target.checked;
    if (check == true) {
      this.autoSave = true;
    } else {
      this.autoSave = false;
    }
  }

  //Method for tracking items
  trackingSearch(evt) {
    var trackingscan = this.Vanityartservice.baseUrl + this.Vanityartservice.trackingitems;
    let trckaingvalue = evt;
    if (trckaingvalue != "" && trckaingvalue != null) {
      var dataParam = {
        "TrackingNumber": trckaingvalue.toUpperCase()
      }
      this.Vanityartservice.present();
      this.Vanityartservice.ajaxCallService(trackingscan, "post", dataParam).then(resp => {
        this.respData = resp;
        console.log("res", this.respData);
        if (resp['scanItemList']['length'] != 0) {
          this.enterEvt = false;
          this.enterEvt = false;
          this.scanItemList = resp['scanItemList'];
          console.log(this.scanItemList.length);
         // this.scanItemList = this.scanItemList.filter(item => item.isScanned == false)
          for(let item of this.scanItemList){
            item.serialNumbers = []
            if(item.isScanned == false){
              item.scannedItems = 0
            }
          }
          this.scanItemList.map(i => i.isscanneditemslist = 0);
          this.trackingList = resp;
          this.orderno = resp['order'];
          this.trackingnumber = resp['trackingNumber'];
          this.shipdate = resp['shipDateString'];
          this.customername = '( ' + resp['customerName'] + ')';
          this.eventLog = 'Tracking # ' + trckaingvalue + ' successfully scanned' + '\n' + this.eventLog;
          this.trackingordr.controls['tracking'].disable();
          setTimeout(() => {
            this.itemNo.setFocus();
          }, 300);
        } else if (resp['status'] == 'Scanned') {
          this.openConfirmationAlert(resp, trckaingvalue);
          this.eventLog = 'Tracking # ' + trckaingvalue + ' already scanned. \u2716' + '\n' + this.eventLog;
          this.Vanityartservice.PresentToast('Order/Tracking # ' + trckaingvalue + ' already added/scanned', "danger");
        } else {
          this.eventLog = 'Tracking # ' + trckaingvalue.toUpperCase() + ' ' + resp['message'] + ' \u2716' + '\n' + this.eventLog;
          // this.Vanityartservice.PresentToast("Invalid Order/Tracking #", "danger");
          this.Vanityartservice.PresentToast(resp['message'], 'danger');
          this.trackingordr.controls['tracking'].reset();
          setTimeout(() => {
            this.tracking.setFocus();
          }, 500);
        }
        this.Vanityartservice.dismiss();
      }).catch(err =>{
        this.Vanityartservice.dismiss();
        this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
      })
    }
  }

  //Tracking items scan

  itemssearch(evt) {
    var itemvalue = evt;
    this.enableSerialNo = true
    let temp: boolean, tempAuto: boolean;
    this.scaneditems = this.trackingordr.value.itemvalues.toUpperCase();
    for(let item of this.scanItemList){
      if(item.itemUpc == this.scaneditems && item.isScanned == false){
       // item.isScanned = true;
        this.itemMatch = true
        this.trackingordr.controls['serialNo'].enable();
        this.serialNo.setFocus();
        item.isByPass = false;
        if(!item.scannedItems){
          item.scannedItems = 0;
        }
        // if(!item.serialNumber){
        //   item.serialNumbers = [];
        // } 
        item.selected = true;
        temp = true;
      }else if(item.itemUpc == this.scaneditems && item.scannedItems == item.itemQuantity){
        this.Vanityartservice.PresentToast('Item and serial number(s) are already scanned & completed.', 'danger');
      }
    }

    // if (!temp) {
    //   this.Vanityartservice.PresentToast(this.message[4], 'danger');
    //   this.eventLog = 'Items# ' + this.scaneditems + ' ' + this.message[4] + ' \u2714' + '\n' + this.eventLog;
    //   this.enableSerialNo = false
    //   this.trackingordr.controls['itemvalues'].reset();
    // }
    // if (this.autoSave) {
    //   for (let idx of this.scanItemList) {
    //     if (idx['itemQuantity'] == idx['scannedItems']) {
    //       tempAuto = true;
    //     } else {
    //       tempAuto = false;
    //       break;
    //     }
    //   }
    //   if (tempAuto) {
    //     // if (this.trackingordr.value['pro'] != '' && this.trackingordr.value['pro'] != undefined) {
    //     this.trackingsubmit();     
    //   } else {
    //     setTimeout(() => {
    //       this.serialNo.setFocus();
    //     }, 300);
    //   }
    // } else {
    //   for (let idx of this.scanItemList) {
    //     if (idx['itemQuantity'] == idx['scannedItems']) {
    //       tempAuto = true;
    //     } else {
    //       tempAuto = false;
    //       break;
    //     }
    //   }
    //   if (!tempAuto) {
    //     setTimeout(() => {
    //       this.serialNo.setFocus();
    //     }, 300);
    //   } else {
    //     setTimeout(() => {
    //       this.itemNo.setFocus();
    //     }, 300);
    //   }
    // }
  }
  //method for trackingsubmit

  trackingsubmit() {
    this.Vanityartservice.present();
    let checkQuantity = this.scanItemList.filter(item => item.scannedItems != item.itemQuantity)
    if(checkQuantity.length == 0){
      this.serialNumbers = []
    }
    this.trackingordr.controls['itemvalues'].reset();
    this.trackingordr.controls['serialNo'].reset();
    this.itemMatch = false
    this.itemlist = this.scanItemList.filter(item => item.isScanned == true && item.scannedItems == item.itemQuantity)
    var saveTracking = this.Vanityartservice.baseUrl + this.Vanityartservice.savetrckingitems;
    console.log(this.itemslist);
    this.d = new Date();
    this.n = this.d.toJSON();
    let jsonobj: any = {
      "trackingNumber": this.respData.trackingNumber,
      "order": this.respData.order,
      "customerName": this.respData.customerName,
      "orderDateString": this.respData.orderDateString,
      "shipDateString": this.respData.shipDateString,
      "carrier": this.respData.carrier,
      "orderStatus": this.respData.orderStatus,
      "shippingMethod": this.respData.shippingMethod,
      "pro": this.trackingordr.value.pro,
      "Modified": this.userId,
      "scanItemList": this.itemlist,
      "scanDate": this.n,
      "isScanned": this.respData.isScanned = true,
      "status": this.respData.status,
      "dataSource": this.dataSource
    }
    this.Vanityartservice.ajaxCallService(saveTracking, "post", jsonobj).then(result => {
      if (result['status'] == "Success") {
        this.enableSaveBtn = false
        this.Vanityartservice.PresentToast('Tracking  completed & ' + result['message'], "success");
        this.eventLog = 'Tracking# ' + this.respData.trackingNumber + ' scan and save completed. \u2714' + '\n' + this.eventLog;
        this.formreset();
        setTimeout(() => {
          this.tracking.setFocus();
        }, 400);
      } else if (result['status'] == "Fail") {
        this.Vanityartservice.PresentToast('Tracking # ' + result['message'], "danger");
      }
      this.Vanityartservice.dismiss();
    }).catch(err =>{
      this.Vanityartservice.dismiss();
      this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
    })

  }


  formreset() {
    this.trackingordr.controls['tracking'].enable();
    this.trackingordr.reset();
    this.scanItemList = [];
    this.serialNumbers = [];
    this.shipdate = '';
    this.orderno = '';
    this.customername = '';
    this.eventLog = '';
    setTimeout(() => {
      this.tracking.setFocus();
    }, 400);
    setTimeout(() => {

    }, 2000);
  }

  //Method to open confirmation alert
  async openConfirmationAlert(resp, track) {
    const alert = await this.alert.create({
      header: 'Confirmation',
      message: resp['message'],
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            let jsonobj = {
              "order": resp['order'],
              "Modified": this.userId,
              "TrackingNumber": track.toUpperCase()
            }
            let url = this.Vanityartservice.baseUrl + this.Vanityartservice.readyToShipped;
            this.Vanityartservice.ajaxCallService(url, "post", jsonobj).then(result => {
              console.log(result);
              if (result['status'] == 'Success') {
                this.itemMatch = false
                this.Vanityartservice.PresentToast(result['message'], 'success');
                this.enterEvt = false;
                this.enterEvt = false;
                this.scanItemList = result['scanItemList'];
                for(let item of this.scanItemList){
                  item.scannedItems = 0
                }
                this.scanItemList.map(i => i.isscanneditemslist = 0);
                this.trackingList = result;
                this.orderno = result['order'];
                this.trackingnumber = result['trackingNumber'];
                this.shipdate = result['shipDateString'];
                this.customername = '( ' + result['customerName'] + ')';
                this.eventLog = 'Tracking # ' + this.trackingordr.value.tracking + ' successfully scanned' + '\n' + this.eventLog;
                this.trackingordr.controls['tracking'].setValue(track.toUpperCase());
                this.trackingordr.controls['tracking'].disable();
                setTimeout(() => {
                  this.itemNo.setFocus();
                }, 300);
              } else {
                this.Vanityartservice.PresentToast(result['message'], 'danger');
                this.eventLog = 'Tracking # ' + result['message'] + '\n' + this.eventLog;
              }
            }).catch(err =>{
              this.Vanityartservice.dismiss();
              this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
            })
          }
        }
      ]
    });
    await alert.present();
  }

  //Method to check the item as completely scanned
  checkToComplete(scan) {
    this.enableSerialNo = true
    let tempAuto: boolean = false;
    for(let item of this.scanItemList){
      if(item.itemName == scan.itemName && item.isScanned == false){
        this.trackingordr.controls['itemvalues'].reset();
        this.trackingordr.controls['itemvalues'].setValue(scan.itemUpc);
        this.trackingordr.controls['serialNo'].enable();
        this.serialNo.setFocus();
        this.itemMatch = true
        //item.isScanned = true;
        item.isByPass = true;
        item.scannedItems = 0;
       // item.serialNumbers = [];
        item.selected = true
        this.scaneditems = null
        if(item.itemUpc){
          this.byPassedItem = item.itemUpc
        }else{
          this.byPassedItem = item.itemName
        }
      }
    }
  
  //   if (this.autoSave) {
  //     for (let idx of this.scanItemList) {
  //       if (idx['itemQuantity'] == idx['scannedItems']) {
  //         tempAuto = true;
  //       } else {
  //         tempAuto = false;
  //         break;
  //       }
  //     }
  //     if (tempAuto) {
  //       this.trackingsubmit();  
  //     } else {
  //       setTimeout(() => {
  //         this.serialNo.setFocus();
  //       }, 300);
  //     }
  //   } else {
  //     for (let idx of this.scanItemList) {
  //       if (idx['itemQuantity'] == idx['scannedItems']) {
  //         tempAuto = true;
  //       } else {
  //         tempAuto = false;
  //         break;
  //       }
  //     }
  //     if (!tempAuto) {
  //       setTimeout(() => {
  //         this.serialNo.setFocus();
  //       }, 300);
  //     } else {
  //       setTimeout(() => {
  //         this.itemNo.setFocus();
  //       }, 300);
  //     }
  //   }
   }

}
