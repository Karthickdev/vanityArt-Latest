import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { IonContent, AlertController, IonRouterOutlet } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-scanreturns',
  templateUrl: './scanreturns.page.html',
  styleUrls: ['./scanreturns.page.scss'],
})
export class ScanreturnsPage implements OnInit {
  public serialScanning: FormGroup;
  public poScanning: FormGroup;
  @ViewChild('serial', { static: false }) serial;
  @ViewChild('po', { static: false }) po;
  @ViewChild('item', {static: false}) item;
  @ViewChild(IonContent, { static: false }) content: IonContent;

  isSerailScan: boolean = true;
  poNumber:any;
  itemUpc:any;
  notes:any;
  customerName:any;
  warehouse:any;
  condition:string;
  respData:any;
  itemRespData:any;
  eventLog:string='';
  userId:any;
  usertype:any;
  isKeyboardHide = true;
  data:any;
  warehouseList:any;
  conditionList:any;
  itemReadOnly: boolean = true;
  enableSaveBtn: boolean = false;
  itemSku:any;
  enableTakePhoto: boolean = false;
  photoType:any;
  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  constructor(private formBuilder: FormBuilder, private Vanityartservice: ApiserviceService, private route: Router, private keyboard: Keyboard,
    private activatedRoute: ActivatedRoute, private alertCtrl: AlertController, private routerOutlet: IonRouterOutlet, private camera: Camera) {
    this.serialScanning = this.formBuilder.group({
      serial: ['', Validators.compose([Validators.required])],
    });
    this.poScanning = this.formBuilder.group({
      po: ['', Validators.compose([Validators.required])],
    });
   // this.photoType = ['Return Label', 'SKU', 'Damaged Area', 'Up front'];
    this.photoType = [{"typeName": "Return Label", "img": "../../assets/default-thumbnail.jpg"},{"typeName": "SKU", "img": "../../assets/default-thumbnail.jpg"},
    {"typeName": "Damaged Area", "img": "../../assets/default-thumbnail.jpg"},{"typeName": "Up front", "img": "../../assets/default-thumbnail.jpg"}]
   }

   validation_messages: any = {
    'serial': [
      { type: 'required', message: 'Serial cannot be empty or null' },
      { type: 'pattern', message: 'Only numbers and characters are allowed' },
    ],
    'po': [
      { type: 'required', message: 'PO# cannot be empty or null' },
      { type: 'pattern', message: 'Only numbers and characters are allowed' },
    ]
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.routerOutlet.swipeGesture = false;
    this.keyboard.onKeyboardWillShow().subscribe(() => {
      this.isKeyboardHide = false;
      this.keyboard.disableScroll(true);
    });

    this.keyboard.onKeyboardWillHide().subscribe(() => {
      this.isKeyboardHide = true;
    });
    this.warehouseList = this.Vanityartservice.warehouses
    this.conditionList = this.Vanityartservice.conditions
    this.warehouse = this.Vanityartservice.defaultWarehouse.toString()
  }

  ionViewDidEnter(){
    setTimeout(()=>{
      this.serial.setFocus();
    }, 300);
    this.userId = localStorage.getItem('Id');
    this.usertype = localStorage.getItem('isvanityUser');
  }



  switchToPo(){
    if(this.respData){
      this.Vanityartservice.PresentToast('There unsaved items. Please save or clear it before switching', 'danger');
    }else{
      this.isSerailScan = false
      this.eventLog = '';
      setTimeout(()=>{
        this.po.setFocus();
      }, 300);
      this.formreset();
    }
  }

  switchToserial(){
    if(this.respData){
      this.Vanityartservice.PresentToast('There unsaved items. Please save or clear it before switching', 'danger');
    }else{
      this.isSerailScan = true
      this.eventLog = '';
      setTimeout(()=>{
        this.serial.setFocus();
      }, 300);
      this.formreset();
    }
  }

  backToHome(){
   // this.formreset();
   if(this.isSerailScan){
    let serial = this.serialScanning.controls.serial.value;
    if (serial == "" || serial == null) {
      this.route.navigate(['/menuitems']);
    } else {
      this.Vanityartservice.PresentToast("There is unsaved data in the form, either save or clear the form.", "danger");
    }
   }else{
    let po = this.poScanning.controls.po.value;
    if (po == "" || po == null) {
      this.route.navigate(['/menuitems']);
    } else {
      this.Vanityartservice.PresentToast("There is unsaved data in the form, either save or clear the form.", "danger");
    }
   }
    
  }

  handleSerialScan(){
    setTimeout(() => {
      this.serialScan()
    }, 300);
  }

  formreset(){
    this.poNumber = '';
    this.itemUpc = '';
    this.itemSku = '';
    this.customerName = '';
    this.condition = '';
    this.warehouse = this.Vanityartservice.defaultWarehouse ? this.Vanityartservice.defaultWarehouse.toString() : '';
    this.notes = '';
    this.respData = '';
    this.serialScanning.enable();
    this.poScanning.enable();
    this.serialScanning.reset();
    this.poScanning.reset();
    this.itemReadOnly = true;
    this.enableSaveBtn = false;
    this.enableTakePhoto = false;
    this.photoType = [{"typeName": "Return Label", "img": "../../assets/default-thumbnail.jpg"},{"typeName": "SKU", "img": "../../assets/default-thumbnail.jpg"},
    {"typeName": "Damaged Area", "img": "../../assets/default-thumbnail.jpg"},{"typeName": "Up front", "img": "../../assets/default-thumbnail.jpg"}]
    if(this.isSerailScan){
      setTimeout(()=>{
        this.serial.setFocus();
      }, 200);
    }else{
      setTimeout(()=>{
        this.po.setFocus();
      }, 200);
    }
  }

  async serialScan(){
    let url = this.Vanityartservice.baseUrl+this.Vanityartservice.serialScanreturn;
    let data = {
      "serialNumber": this.serialScanning.controls['serial'].value.toUpperCase()
    }
    this.Vanityartservice.present();
   await this.Vanityartservice.ajaxCallService(url, 'post', data).then(res =>{
      if(res['status']=="Success"){
        this.Vanityartservice.dismiss();
        this.serialScanning.disable();
        this.enableSaveBtn = true;
        this.Vanityartservice.PresentToast('Serial Number '+this.serialScanning.controls['serial'].value+' is scanned successfully', 'success');
        this.eventLog = 'Serial Number '+this.serialScanning.controls['serial'].value+' is scanned successfully \n'+this.eventLog
        this.respData = res
        this.poNumber = this.respData['purchaseOrderNumber']
        this.itemUpc = this.respData['itemUpc']
        this.itemSku = this.respData['itemSku']
        this.customerName = this.respData['customerName']
      }else{
        this.Vanityartservice.dismiss();
        this.Vanityartservice.PresentToast(this.serialScanning.controls['serial'].value +' '+res['displayMessage'], 'danger');
        this.eventLog = this.serialScanning.controls['serial'].value +' '+res['displayMessage']+'\n'+this.eventLog
        this.serialScanning.reset();
        this.serialScanning.enable();
        setTimeout(()=>{
          this.serial.setFocus();
        }, 300);
      }
    }).catch(err =>{
      this.Vanityartservice.dismiss();
      this.Vanityartservice.PresentToast('Unable to reach server', 'danger'); 
    })
  }

  handlePoScan(){
    setTimeout(() => {
      this.poScan()
    }, 300);
  }

  async poScan(){
    let url = this.Vanityartservice.baseUrl+this.Vanityartservice.poScan;
    let data ={
      "PurchaseOrderNumber": this.poScanning.controls['po'].value.toUpperCase()
    }
    this.Vanityartservice.present();
    await this.Vanityartservice.ajaxCallService(url, 'post', data).then(res => {
      if(res['status']=="Success"){
        this.Vanityartservice.dismiss();
        this.poScanning.disable();
        this.enableSaveBtn = true;
        this.Vanityartservice.PresentToast('PO Number '+this.poScanning.controls['po'].value+' is scanned successfully', 'success');
        this.eventLog = 'PO Number '+this.poScanning.controls['po'].value+' is scanned successfully \n'+this.eventLog
        this.itemReadOnly = false;
        setTimeout(()=>{
          this.item.setFocus();
        }, 300);
        this.respData = res
        this.customerName = this.respData['customerName']
      }else if(res['status'] == "Fail"){
        this.Vanityartservice.dismiss();
        this.respData = res
        this.Vanityartservice.PresentToast(res['displayMessage'], 'danger');
        this.eventLog = res['displayMessage']+'\n'+this.eventLog
        this.poScanning.reset();
        this.itemReadOnly = true;
          this.poScanning.enable();
           setTimeout(()=>{
             this.po.setFocus();
           }, 300);
      }else{
        this.Vanityartservice.dismiss();
        this.respData = res
        this.poAlert(this.respData['displayMessage']);
        this.eventLog = this.poScanning.controls['po'].value +' '+res['displayMessage']+'\n'+this.eventLog
      
      }
    }).catch(err =>{
      this.Vanityartservice.dismiss();
      this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
    })
  }

  async poAlert(msg){
    const alert = await this.alertCtrl.create({
      message: msg,
      buttons:[{
        text: "NO",
        handler: ()=>{
          this.poScanning.reset();
          this.poScanning.enable();
           setTimeout(()=>{
             this.po.setFocus();
           }, 300);
        }
      },
      {
        text: "YES",
        handler: ()=>{
          this.itemReadOnly = false;
          setTimeout(()=>{
            this.item.setFocus();
          }, 300)
        }
      }]
    });
    await alert.present();
  }

  handleitemScan(){
    setTimeout(() =>{
      this.itemUpcScan()
    }, 300);
  }

  async itemUpcScan(){
    let url = this.Vanityartservice.baseUrl+this.Vanityartservice.itemScan;
    let data = {
      "SkuOrUpc": this.itemUpc,
      "IsOpalOrder":this.respData['isOpalOrder'],
      "PurchaseOrderNumber":this.respData['purchaseOrderNumber'],
      "OrderId":this.respData['orderId'],
      "IsVanityArtOrder":this.respData['isVanityArtOrder']
      }
      this.Vanityartservice.present();
    await this.Vanityartservice.ajaxCallService(url, 'post', data).then(res =>{
      if(res['status'] == "Success"){
        this.Vanityartservice.dismiss();
        this.itemRespData = res
        this.respData['actualQuantityOrdered'] = this.itemRespData['actualQuantityOrdered']
        this.respData['returnedQuantity'] = this.itemRespData['returnedQuantity']
        this.respData['itemId'] = this.itemRespData['itemId']
        this.respData['itemUpc'] = this.itemRespData['itemUpc']
        this.respData['skuOrUpc'] = this.itemRespData['skuOrUpc']
        this.respData['isPartOfGroupItem'] = this.itemRespData['isPartOfGroupItem']
        this.Vanityartservice.PresentToast('Item UPC: '+this.itemUpc+' is scanned', 'success');
        this.eventLog = 'Item Upc '+this.itemUpc+' is scanned \n'+this.eventLog
      }else{
        this.Vanityartservice.dismiss();
        this.itemRespData = res
        this.Vanityartservice.PresentToast(this.itemUpc+' '+this.itemRespData['displayMessage'], 'danger');
        this.eventLog = this.itemUpc +' '+this.itemRespData['displayMessage']+'\n'+this.eventLog
        this.itemUpc = '';
        setTimeout(()=>{
          this.item.setFocus();
        });
      }
    }).catch(err => {
      this.Vanityartservice.dismiss();
      this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
    })
  }

  onConditionChange(){
    if(this.condition == "20" || this.condition == "30"){
      this.enableTakePhoto = true
    }else{
      this.enableTakePhoto = false
    }
  }

  takePhoto(type){
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      for(let item of this.photoType){
        if(item.typeName == type.typeName){
          item.img = base64Image
        }
      }
     }, (err) => {
      // Handle error
     });
  }

  async saveReturn(){
      let url = this.Vanityartservice.baseUrl+this.Vanityartservice.save;
      let data = {
        "serialNumber": this.isSerailScan ? this.serialScanning.controls['serial'].value.toUpperCase() : '',
        "purchaseOrderNumber": this.respData['purchaseOrderNumber'],
        "orderId": this.respData['orderId'],
        "isOpalOrder": this.respData['isOpalOrder'],
        "isVanityArtOrder": this.respData['isVanityArtOrder'],
        "actualQuantityOrdered": this.respData['actualQuantityOrdered'],
        "returnedQuantity": this.respData['returnedQuantity'],
        "itemId": this.respData['itemId'],
        "itemUpc": this.respData['itemUpc'],
        "customerId": this.respData['customerId'],
        "customerName": this.respData['customerName'],
        "skuOrUpc": this.respData['itemUpc'],
        "status": "Success",
        "isPartOfGroupItem": this.respData['isPartOfGroupItem'],
        "WarehouseId":this.warehouse,
        "ItemCondition":this.condition,
        "CreatedBy":this.userId,
        "Notes":this.notes,
        "LoggedInUserId":this.userId,
        "isVanityArtUser": this.usertype
      }
      console.log(data);
      this.Vanityartservice.present();
      await this.Vanityartservice.ajaxCallService(url, 'post', data).then(res =>{
        if(res['status'] == "Success"){
          this.Vanityartservice.dismiss();
          this.Vanityartservice.PresentToast('Item return saved successfully.', 'success');
          this.eventLog = 'Item return saved successfully.'+'\n'+this.eventLog
          this.formreset();
        }else{
          this.Vanityartservice.dismiss();
          this.Vanityartservice.PresentToast(res['displayMessage'], 'danger');
          this.eventLog = res['displayMessage']+'\n'+this.eventLog
        }
      }).catch(err =>{
        this.Vanityartservice.dismiss();
        this.Vanityartservice.PresentToast('Unable to reach server', 'danger');
      })
    }

}
