import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MascotaPage } from '../mascota/mascota';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {
  mascotas=[];
  items=[];
  mascotaP=MascotaPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mascotas =this.navParams.get('mascotas');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }

  getItems(ev){
    console.log(ev.target.value);
    this.items = this.mascotas.filter(mascota => {
      return mascota.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase())  //en items que es el arreglo se guardan los resultados
    });
  }

  verMascota(mascota){
    this.navCtrl.push(this.mascotaP, {mascota:mascota});
  }

}
