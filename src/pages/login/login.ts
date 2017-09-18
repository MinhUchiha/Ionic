import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider) {
  }

  user = {
    email: '',
    password: ''
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signin(){
    console.log(this.user);
    this.restProvider.signIn(this.user).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

  nextpage(){
    console.log('next page');
    this.navCtrl.push('page-main');
  }

}
