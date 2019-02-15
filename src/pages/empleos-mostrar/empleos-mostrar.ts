import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmpleosMostrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empleos-mostrar',
  templateUrl: 'empleos-mostrar.html',
})
export class EmpleosMostrarPage {

  empleo={};
  imgs=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.empleo=this.navParams.get ('empleo');
    if (this.empleo.ad.hasOwnProperty('images')){
      this.imgs =this.empleo.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpleosMostrarPage');
  }

}
