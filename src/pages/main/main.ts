import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OrderPage} from "../order/order";
import {EmployeePage} from "../employee/employee";
import {ShopPage} from "../shop/shop";

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'page-main'
})
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = ShopPage;
    this.tab2 = EmployeePage;
    this.tab3 = OrderPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  tab1: any;
  tab2: any;
  tab3: any;
}
