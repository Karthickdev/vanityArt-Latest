import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { AlertController, IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-bolscanning',
  templateUrl: './bolscanning.page.html',
  styleUrls: ['./bolscanning.page.scss'],
})


export class BolscanningPage implements OnInit {
  public bolscanning: FormGroup;

  @ViewChild('bolnumber', { static: false }) bolnumber;
  @ViewChild('itemNo', { static: false }) itemNo;
  @ViewChild('pro', { static: false }) proNo;
  @ViewChild('serialNo', { static:false}) serialNo;

  item: any;
  qty: number = 0;
  arry: any;
  enterEvt: boolean = false;
  scanItemList: any;
  bolorderList: any;
  eventLog: String = "";
  itemno: any;
  orderno: any;
  shipdate: any;
  customername: any;
  scanitems: any;
  autoSave: boolean = false;
  scaneditems: any;
  array1: any;
  addedvalue: any;
  itemslist: any;
  respData: any;
  userId: any;
  status: any;
  po: any;
  message: any = [];
  keyboardOpen: boolean = false;
  pro: string;
  enableSerialNo:boolean = false;
  byPassedItem:any;
  serialNumbers:any[]=[];
  serialData:any;
  itemlist:any;
  itemMatch: boolean = false;
  dataSource: any;
  enableSaveBtn: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private routeto: Router,
    private Vanityartservice: ApiserviceService,
    public alert: AlertController,
    private routerOutlet: IonRouterOutlet
  ) {
    this.bolscanning = this.formBuilder.group({
      bolnumber: ['', Validators.compose([Validators.required])],
      itemvalues: [''],
      serialNo: [''],
      // autosave : ['', Validators.compose([Validators.required])],
      item: [''],
      qty: [''],
      pro: [''],
      orderno: [''],
      shipdate: [''],
      customerName: ['']
    });
    this.message = JSON.parse(localStorage.getItem(("Message")));
  }
  validation_messages: any = {
    'bolnumber': [
      // { type: 'required', message: this.message[2] },
      { type: 'required', message: 'BOL cannot be empty or null' },
      { type: 'pattern', message: 'Only numbers and characters are allowed' },
    ],
    'pro': [
      // { type: 'required', message: 'PRO# is required.' },
      // { type: 'pattern', message: 'Only numbers and characters are allowed' },
    ]
  }

  ngAfterViewInit() {
    console.log(this.bolscanning.value);
    setTimeout(() => {
      this.bolnumber.setFocus();
    }, 400);
  }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem(("Id")));
    this.routerOutlet.swipeGesture = false;
  }

  ionViewDidLeave() {
    // this.bolscanning.reset();
  }

  scanOrder() {
    console.log('In scan order');
    let value = this.bolscanning.controls['bolnumber'].value;
    this.orderSearch(value);
  }
  //order search via enter key
  handleScanner(evt) {
    // this.keyboard.show();
    // this.input.setFocus();
    setTimeout(() => {
      let value = evt.target.value;
      this.orderSearch(value);
    }, 800);
  }


  //items search via enter key
  handleitemScanner(evt) {
    setTimeout(() => {
      let value = evt.target.value;
      let isItemAvailable = this.scanItemList.filter(item => item.itemUpc == value.toUpperCase());
      console.log(isItemAvailable);
      if(isItemAvailable.length > 0){
        this.itemssearch(value);
      }else{
        this.Vanityartservice.PresentToast('Item # does not match with any items', 'danger');
      }
    }, 800);
  }

  handleproScanner(evt) {
    let value = evt.target.value;
    let checkItems = this.scanItemList
    checkItems = checkItems.filter(item => item.scannedItems < item.itemQuantity)
    if(value && this.autoSave && checkItems.length == 0){
      this.bolscansubmit();
    }else if(value && !this.autoSave && checkItems.length == 0){
      this.enableSaveBtn = true
    }
    // setTimeout(() => {
    //   if (this.autoSave) {
    //     this.bolscansubmit();
    //   }
    // }, 800)
  }

  handleserialNoScanner(evt){
    let value = evt.target.value;
    if(value.length == 11){
      this.bolscanning.controls['serialNo'].disable();
      this.serailNoScan(value);
    }
  }

  // checkPro(evt){
  //   let value = evt.target.value;
  //   if(value){
  //     this.autoSave = false
  //   }else{
  //     this.autoSave = true
  //   }
  // }

  serailNoScan(value){
    if(this.itemMatch == true){
    let serialNo = value.toUpperCase();
    if(serialNo.length == 11){
      let url = this.Vanityartservice.baseUrl+this.Vanityartservice.serialScan
      let data = {
        "BOL": this.bolscanning.controls['bolnumber'].value,
        "order": this.orderno,
        "serialNumber": serialNo
      }
      this.Vanityartservice.present();
      this.Vanityartservice.ajaxCallService(url, "post", data).then(resp =>{
        this.serialData = resp
        if(this.serialData['status'] == 'Success'){
          this.Vanityartservice.dismiss();
          this.dataSource = this.serialData['dataSource'];
          if(this.bolscanning.value.itemvalues){
            this.scaneditems = this.bolscanning.value.itemvalues.toUpperCase();
          }
          console.log(this.scanItemList);
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
                    this.bolscanning.controls['itemvalues'].reset();
                    setTimeout(()=>{
                      this.itemNo.setFocus();
                    }, 200);
                    // this.bolscanning.controls['serialNo'].enable();
                    this.bolscanning.controls['serialNo'].reset();
                    // setTimeout(()=>{
                    //   this.serialNo.setFocus();
                    // },200)
                    if(this.scanItemList[idx]['scannedItems'] == this.scanItemList[idx]['itemQuantity']){
                      this.enableSerialNo = false
                      this.bolscanning.controls['itemvalues'].reset();
                      this.itemMatch = false
                      this.scanItemList[idx]['selected'] = false
                      this.scanItemList[idx]['isScanned'] = true
                      let checkItems = this.scanItemList
                      checkItems = checkItems.filter(item => item.scannedItems < item.itemQuantity)
                      if(checkItems.length == 0){
                        setTimeout(()=>{
                          this.proNo.setFocus();
                        },200)
                      }else{
                        setTimeout(()=>{
                          this.itemNo.setFocus()
                        },200)
                      }
                      if(this.autoSave && this.bolscanning.controls['pro'] && checkItems.length == 0){
                        setTimeout(()=>{
                          this.bolscansubmit()
                        },200)
                      }else if(!this.autoSave && this.bolscanning.controls['pro'] && checkItems.length == 0){
                        this.enableSaveBtn = true
                      }
                    }
                  }else{
                    this.bolscanning.controls['serialNo'].enable();
                    setTimeout(()=>{
                      this.serialNo.setFocus()
                    },100);
                    this.Vanityartservice.PresentToast('No duplicate serial number allowed across items', "danger");
                  }
                }else{
                  this.bolscanning.controls['itemvalues'].reset();
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
                    this.bolscanning.controls['itemvalues'].reset();
                    setTimeout(()=>{
                      this.itemNo.setFocus();
                    }, 200);
                    //this.bolscanning.controls['serialNo'].enable();
                    this.bolscanning.controls['serialNo'].reset();
                    // setTimeout(()=>{
                    //   this.serialNo.setFocus();
                    // },200)
                    if(this.scanItemList[idx]['scannedItems'] == this.scanItemList[idx]['itemQuantity']){
                      this.enableSerialNo = false
                      this.bolscanning.controls['itemvalues'].reset();
                      this.itemMatch = false
                      this.scanItemList[idx]['selected'] = false
                      this.scanItemList[idx]['isScanned'] = true
                      let checkItems = this.scanItemList
                      checkItems = checkItems.filter(item => item.scannedItems < item.itemQuantity)
                      if(checkItems.length == 0){
                        setTimeout(()=>{
                          this.proNo.setFocus();
                        },200)
                      }else{
                        setTimeout(()=>{
                          this.itemNo.setFocus()
                        },200)
                      }
                      if(this.autoSave && this.bolscanning.controls['pro'] && checkItems.length == 0){
                        setTimeout(()=>{
                          this.bolscansubmit()
                        },200)
                      }else if(!this.autoSave && this.bolscanning.controls['pro'] && checkItems.length == 0){
                        this.enableSaveBtn = true
                      }
                    }
                  }else{
                    this.bolscanning.controls['serialNo'].enable();
                    setTimeout(()=>{
                      this.serialNo.setFocus()
                    },100);
                    this.Vanityartservice.PresentToast('No duplicate serial number allowed across items', "danger");
                  }
                }else{
                  this.bolscanning.controls['itemvalues'].reset();
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
                    this.bolscanning.controls['itemvalues'].reset();
                    setTimeout(()=>{
                      this.itemNo.setFocus();
                    }, 200);
                    //this.bolscanning.controls['serialNo'].enable();
                    this.bolscanning.controls['serialNo'].reset();
                    // setTimeout(()=>{
                    //   this.serialNo.setFocus();
                    // },200)
                    if(this.scanItemList[idx]['scannedItems'] == this.scanItemList[idx]['itemQuantity']){
                      this.bolscanning.controls['serialNo'].reset();
                      this.itemMatch = false
                      this.enableSerialNo = false
                      this.scanItemList[idx]['selected'] = false
                      this.scanItemList[idx]['isScanned'] = true
                      let checkItems = this.scanItemList
                      checkItems = checkItems.filter(item => item.scannedItems < item.itemQuantity)
                      if(checkItems.length == 0){
                        setTimeout(()=>{
                          this.proNo.setFocus();
                        },200)
                      }else{
                        setTimeout(()=>{
                          this.itemNo.setFocus()
                        },200)
                      }
                      if(this.autoSave && this.bolscanning.controls['pro'] && checkItems.length == 0){
                        setTimeout(()=>{
                          this.bolscansubmit()
                        },200)
                      }else if(!this.autoSave && this.bolscanning.controls['pro'] && checkItems.length == 0){
                        this.enableSaveBtn = true
                      }
                    }
                  }else{
                    this.bolscanning.controls['serialNo'].enable();
                    setTimeout(()=>{
                      this.serialNo.setFocus()
                    },100);
                    this.Vanityartservice.PresentToast('No duplicate serial number allowed across items', "danger");
                  }
                }else{
                  this.bolscanning.controls['itemvalues'].reset();
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
                    this.bolscanning.controls['itemvalues'].reset();
                    //this.bolscanning.controls['serialNo'].enable();
                    // this.bolscanning.controls['itemvalues'].reset();
                    setTimeout(()=>{
                      this.itemNo.setFocus();
                    }, 200);
                    this.bolscanning.controls['serialNo'].reset();
                    // setTimeout(()=>{
                    //   this.serialNo.setFocus();
                    // },200);
                    if(this.scanItemList[idx]['scannedItems'] == this.scanItemList[idx]['itemQuantity']){
                      this.bolscanning.controls['serialNo'].reset();
                      this.itemMatch = false
                      this.enableSerialNo = false
                      this.scanItemList[idx]['selected'] = false
                      this.scanItemList[idx]['isScanned'] = true
                      let checkItems = this.scanItemList
                      checkItems = checkItems.filter(item => item.scannedItems < item.itemQuantity)
                      if(checkItems.length == 0){
                        setTimeout(()=>{
                          this.proNo.setFocus();
                        },200)
                      }else{
                        setTimeout(()=>{
                          this.itemNo.setFocus()
                        },200)
                      }
                      if(this.autoSave && this.bolscanning.controls['pro'] && checkItems.length == 0){
                        setTimeout(()=>{
                          this.bolscansubmit()
                        },200)
                      }else if(!this.autoSave && this.bolscanning.controls['pro'] && checkItems.length == 0){
                        this.enableSaveBtn = true
                      }
                    }
                  }else{
                    this.bolscanning.controls['serialNo'].enable();
                    setTimeout(()=>{
                      this.serialNo.setFocus()
                    },100);
                    this.Vanityartservice.PresentToast('No duplicate serial number allowed across items', "danger");
                  }
                }else{
                  this.bolscanning.controls['itemvalues'].reset();
                  this.Vanityartservice.PresentToast('All quantities are scanned', "success");
                }
              }
            }
          }
        }else if(this.serialData['status'] == 'Fail'){
          this.Vanityartservice.dismiss();
          this.bolscanning.controls['serialNo'].enable();
          this.Vanityartservice.PresentToast(this.serialData['message'], 'danger');
        }
      }).catch(err =>{
        this.Vanityartservice.dismiss();
        this.bolscanning.controls['serialNo'].enable();
        this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
      })
    }else{
      this.bolscanning.controls['serialNo'].enable();
      this.Vanityartservice.PresentToast('Serial Number must be 11 digits', "danger");
    }
    }else{
      this.bolscanning.controls['serialNo'].enable();
      this.itemNo.setFocus();
      this.Vanityartservice.PresentToast('No item has been scanned. Please scan an item before serial number scanning.', "danger");
    }
  }

  orderSearch(evt) {
    this.enableSerialNo = false
    var orderScan = this.Vanityartservice.baseUrl + this.Vanityartservice.getscanitems;
    let bolvalue = evt;
    if (bolvalue != "" && bolvalue != null) {
      var dataParam = {
        //  "BOL": this.bolscanning.value.bolnumber
        "BOL": bolvalue.toUpperCase(),

      }
      this.Vanityartservice.present();
      this.Vanityartservice.ajaxCallService(orderScan, "post", dataParam).then(resp => {
        this.respData = resp;
        // if(resp['status'] == 'Ready to ship'){
        if (resp['scanItemList']['length'] != 0) {
          this.enterEvt = false;
          this.enterEvt = false;
          this.scanItemList = resp['scanItemList'];
          console.log(this.scanItemList);
         // this.scanItemList = this.scanItemList.filter(item => item.isScanned == false)
          for(let item of this.scanItemList){
            item.itemDescription = item.itemDescription.substring(0, 70)
            item.serialNumbers = []
            if(item.isScanned == false){
              item.scannedItems = 0
            }
          }
          this.bolscanning.controls['pro'].setValue(resp['pro']);
          this.scanItemList.map(item => {
            if (item['isScanned']) {
              item['isscanneditemslist'] = item['itemQuantity'];
            } else {
              item['isscanneditemslist'] = 0;
            }
          })
          this.bolorderList = resp;
          this.orderno = resp['order'];
          this.shipdate = resp['shipDateString'];
          this.customername = '( ' + resp['customerName'] + ')';
          this.status = resp['orderStatus']
          this.po = resp['po'];
          this.eventLog = 'BOL # ' + bolvalue + ' successfully scanned' + '\n' + this.eventLog;
          this.bolscanning.controls['bolnumber'].disable();
          // if (this.scanItemList[0]['isScanned']) {
          //   setTimeout(() => {
          //     this.proNo.setFocus();
          //   }, 500);
          // } else {
            setTimeout(() => {
              this.itemNo.setFocus();
            }, 500);
        //  }
          if (resp['message']) {
            this.Vanityartservice.PresentToast(resp['message'], "danger");
          }
        } else if (resp['status'] == 'Shipped') {
          this.openConfirmationAlert(resp, bolvalue);
          this.eventLog = 'Order # ' + bolvalue + ' ' + resp['message'] + '\u2716' + '\n' + this.eventLog;
          this.Vanityartservice.PresentToast('BOL# ' + bolvalue + ' ' + resp['message'], "danger");
          this.bolscanning.controls['bolnumber'].reset();
        } else if (resp['status'] == 'Delivered') {
          this.eventLog = 'Order # ' + bolvalue + ' is Delivered . \u2716' + '\n' + this.eventLog;
          this.Vanityartservice.PresentToast('BOL # ' + bolvalue + ' is Delivered', "danger");
          this.bolscanning.controls['bolnumber'].reset();
        }
        else if (resp['message'] == 'Order has been cancelled') {
          this.eventLog = 'Order # ' + bolvalue + ' is Cancelled . \u2716' + '\n' + this.eventLog;
          this.Vanityartservice.PresentToast('BOL # ' + bolvalue + ' is Cancelled', "danger");
          this.bolscanning.controls['bolnumber'].reset();
          setTimeout(() => {
            this.bolnumber.setFocus();
          }, 500);
        }
        else {
          this.eventLog = 'Order # ' + resp['message'] + ' \u2716' + '\n' + this.eventLog;
          this.Vanityartservice.PresentToast(resp['message'], 'danger');
          this.bolscanning.controls['bolnumber'].reset();
          setTimeout(() => {
            this.bolnumber.setFocus();
          }, 500);
        }
        this.Vanityartservice.dismiss();
        // }
      }).catch(err =>{
        this.Vanityartservice.dismiss();
        this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
      })
    }
  }

  //items search
  itemssearch(evt) {
    var itemvalue = evt;
    this.enableSerialNo = true
    let temp: boolean, tempAuto: boolean;
    this.scaneditems = this.bolscanning.value.itemvalues.toUpperCase();
    for(let item of this.scanItemList){
      if(item.itemUpc == this.scaneditems && item.isScanned == false){
        this.itemMatch = true
        this.bolscanning.controls['serialNo'].enable();
        this.serialNo.setFocus();
        //item.isScanned = true;
        item.isByPass = false;
        if(!item.scannedItems){
          item.scannedItems = 0;
        }
        // if(!item.serialNumber){
        //   item.serialNumbers = []
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
    //   this.bolscanning.controls['itemvalues'].reset();
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
    //     // if (this.bolscanning.value['pro'] != '' && this.bolscanning.value['pro'] != undefined) {
    //     this.bolscansubmit();     
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

  //Method to save data through save button
  bolscansubmit() {
    if (this.bolscanning.value.pro == '' || this.bolscanning.value.pro == undefined) {
      this.Vanityartservice.PresentToast('PRO # can not be empty', 'danger');
      setTimeout(() => {
          this.proNo.setFocus();
        }, 200);
    }else{
      this.Vanityartservice.present();
      this.itemlist = this.scanItemList
      let checkQuantity = this.itemlist.filter(item => item.scannedItems != item.itemQuantity)
      if(checkQuantity.length == 0){
        this.serialNumbers = []
      }
      this.bolscanning.controls['itemvalues'].reset();
      this.bolscanning.controls['serialNo'].reset();
      this.itemMatch = false
      this.itemlist = this.itemlist.filter(item => item.isScanned == true && item.scannedItems == item.itemQuantity)
      var saveOrder = this.Vanityartservice.baseUrl + this.Vanityartservice.saveitems;
      let jsonobj: any = {
        "bol": this.respData.bol,
        "order": this.respData.order,
        "customerName": this.respData.customerName,
        "orderDateString": this.respData.orderDateString,
        "shipDateString": this.respData.shipDateString,
        "carrier": this.respData.carrier,
        "orderStatus": this.respData.orderStatus,
        "shippingMethod": this.respData.shippingMethod,
        // "pro": this.bolscanning.value.pro != undefined ? this.bolscanning.value.pro : '',
        "pro": this.bolscanning.value.pro,
        "Modified": this.userId,
        "scanItemList": this.itemlist,
        "dataSource": this.dataSource
      }
      console.log(jsonobj);
      this.Vanityartservice.ajaxCallService(saveOrder, "post", jsonobj).then(result => {
        if (result['status'] == 'Success') {
          this.enableSaveBtn = false
          this.Vanityartservice.PresentToast("Items scan completed & " + result['message'], "success");
          this.eventLog = 'Items# ' + this.respData.bol + ' scan and save completed. \u2714' + '\n' + this.eventLog;
          // this.scanItemList = this.scanItemList.filter(item => item.scannedItems < item.itemQuantity)
          // if(this.scanItemList.length > 0){
          //   setTimeout(()=>{
          //     this.orderSearch(this.respData.bol)
          //   }, 200)
          // } else {
            this.formreset();
          //}
          setTimeout(() => {
            this.bolnumber.setFocus();
          }, 400);
        }else {
          this.Vanityartservice.dismiss();
          this.Vanityartservice.PresentToast(result['message'], "danger");
        }
        this.Vanityartservice.dismiss();
      }).catch((err)=>{
        this.Vanityartservice.dismiss();
        this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
      })
  }
  }



  //Method to check if autoSave is on/off
  isChecked(evt) {
    let check = evt.target.checked;
    if (check == true) {
      this.autoSave = true;
      // this.itemssearchauto(evt);
    } else {
      this.autoSave = false;
    }
  }

  //Method to go back to home page
  backToHome() {
    let bolnumber = this.bolscanning.controls.bolnumber.value;
    if (bolnumber == "" || bolnumber == null) {
      this.routeto.navigate(['/menuitems']);
    } else {
      this.Vanityartservice.PresentToast("There is unsaved data in the form, either save or clear the form.", "danger");
    }
  }


  //Method to form reset 
  formreset() {

    this.bolscanning.controls['bolnumber'].enable();
    this.bolscanning.reset();
    this.scanItemList = [];
    this.serialNumbers = [];
    this.shipdate = '';
    this.orderno = '';
    this.customername = '';
    this.po = '';
    this.eventLog = '';
    this.enableSerialNo = false;
    setTimeout(() => {
      this.bolnumber.setFocus();
    }, 400);



  }

  //Method to open confirmation alert
  async openConfirmationAlert(resp, bol) {
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
              "BOL": bol.toUpperCase(),
              "pro": resp['pro']
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
                this.bolorderList = result;
                this.orderno = result['order'];
                this.shipdate = result['shipDateString'];
                this.customername = '( ' + result['customerName'] + ')';
                this.status = result['orderStatus'];
                this.bolscanning.controls['pro'].setValue(resp['pro']);
                this.bolscanning.controls['bolnumber'].setValue(bol.toUpperCase());
                this.eventLog = 'BOL # ' + this.bolscanning.value.bolnumber + ' successfully scanned' + '\n' + this.eventLog;
                this.bolscanning.controls['bolnumber'].disable();
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
        this.bolscanning.controls['itemvalues'].reset();
        this.bolscanning.controls['itemvalues'].setValue(scan.itemUpc);
        this.bolscanning.controls['serialNo'].enable();
        this.serialNo.setFocus();
        this.itemMatch = true
       // item.isScanned = true;
        item.isByPass = true;
        if(!item.scannedItems){
          item.scannedItems = 0;
        }
        item.selected = true
        this.scaneditems = null
        if(item.itemUpc){
          this.byPassedItem = item.itemUpc
        }else{
          this.byPassedItem = item.itemName
        }
        
      }
    }
  
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
    //     this.bolscansubmit();  
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
}