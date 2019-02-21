import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { EmpleosMostrarPage } from '../empleos-mostrar/empleos-mostrar';
import { BuscarPage } from '../buscar/buscar';

/**
 * Generated class for the EmpleoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empleo',
  templateUrl: 'empleo.html',
})
export class EmpleoPage {

  empleos=[];
  empleoPage=EmpleosMostrarPage;
  buscarP=BuscarPage;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get('/v1/klfst?&category=6020&lim=29&lang=es')
    .subscribe(data =>{
      //console.log(JSON.stringify(data));
      if (data.hasOwnProperty('list_ads')){
        this.empleos= data ['list_ads']
      }
    }, error=>{
      console.log(JSON.stringify(error));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpleoPage');
  }

  verEmpleo(empleo){
    console.log('Hola');
    this.navCtrl.push(this.empleoPage, {empleo:empleo});

  }

  buscar(){
    this.navCtrl.push(this.buscarP, {mascotas:this.empleos})
  }

}
