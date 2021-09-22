import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  //baseUrl: string = 'http://67.79.237.242/opal/uat/vanityart/'; //UAT
 baseUrl: string = 'https://www2.order-fulfillment.bz/vanityart/'; //NEW PROD
	//Login
	userLogin: string = "UserApi/UserLogin";
	getscanitems: string = "ordersapi/BOLScanDetails";
  trackingitems: string = "ordersapi/TrackingDetails";
  serialScan: string = "ordersapi/VerifySerialNumber";
  // saveitems: string = "ordersapi/UpdateBolScan";
  // savetrckingitems: string = "ordersapi/UpdateTracking";
  saveitems: string = "ordersapi/UpdateBolScanV2";
	savetrckingitems: string = "ordersapi/UpdateTrackingV2";
	getReport: string = "ordersapi/Report";
	exportreports: string = "ordersapi/ExportReport";
	orderList: string = "ordersapi/OrderStatusList";
	warehouseList: string = "ordersapi/ScanAppWarehouseList";
	ajaxData: any;
	err: any;
	isLoading: any;
	errorMsg: string = "UserApi/GetResponseMessages";
	readyToShipped: string = "ordersapi/UpdateReadyToShipped";
  serialScanreturn: string = "ordersapi/GetOrderItemDetailsBySerialNumber";
  poScan: string = "ordersapi/ScanPoNumber";
  save: string = "OrdersApi/SaveReturn";
  itemScan: string ="OrdersApi/ValidateItemScan";
	errorMessages: any;
  versionChecked: boolean;
  warehouses: any;
  conditions: any;
  defaultWarehouse: any;

  ///ordersapi/GetPickItems
  //ordersapi/DigitalPicklistFilters
  
  constructor(public http: HttpClient,
    public toastController: ToastController,
    public loadingCtrl: LoadingController,
    public alert: AlertController) { }

  async PresentToast(msg, color) {
    const toast = await this.toastController.create({
      message: msg,
      color: color,
      duration: 3000,
      position: 'bottom',
      keyboardClose: false,
      showCloseButton: true,
      cssClass: "toast",
    });
    toast.present();
  }

  async present() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      // duration: 3000,
      message: 'Please wait...',
      spinner: 'lines',
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss();
  }

  ajaxCallService(dataUrl, dataType, dataParam) {
    let headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Methods', 'POST, GET ,OPTIONS');
    headers.append('Access-Control-Allow-Headers', 'application/json');
    headers.append('Content-Type', 'application/json');
    switch (dataType) {
      case 'get': return new Promise(resolve => {  //get return type	
        this.http.get(dataUrl)
          .subscribe(data => {
            this.ajaxData = data;
            resolve(this.ajaxData);
          }, (err) => {
            this.err = err.error;
            this.PresentToast('Unable to reach server, Please try again', 'danger');
            resolve(this.err);

          });
      });
      case 'post': return new Promise(resolve => {	//post return type
        // this.presentLoading();

        this.http.post(dataUrl, dataParam, { headers: headers })
          .subscribe(data => {
            this.ajaxData = data;
            resolve(this.ajaxData);
          }, (err) => {
            if (err) {
              this.PresentToast('Unable to reach server, Please try again', 'danger');
              resolve(this.err);
            } else {
              this.PresentToast('Unable to reach server, Please try again', 'danger');
            }
          });
      });
    }
  }

  //Method to present alert fro App update
  async presentAlert() {
		const alert = await this.alert.create({
			header: "App Update",
			message: "A new version available for the app, Kindly update to the latest version!",
      buttons: [
        {
          text: 'Done',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah', blah);
            navigator['app'].exitApp();
          }
        }
      ]
		});
		await alert.present();
	}
}
