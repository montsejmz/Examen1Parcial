import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { MascotaPage } from '../mascota/mascota';
import { BuscarPage } from '../buscar/buscar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mascotas =[];
  mascotaPage=MascotaPage;
  buscarP=BuscarPage;

  constructor(public navCtrl: NavController, public http: HttpClient) {

    this.http.get('/v1/klfst?&category=4020&offset=1&lim=29&lang=es')
    .subscribe(data =>{
      //console.log(JSON.stringify(data));
      if (data.hasOwnProperty('list_ads')){
        this.mascotas= data ['list_ads']
      }
    }, error=>{
      console.log(JSON.stringify(error));
    });

  }

  verMascota(mascota){
    this.navCtrl.push(this.mascotaPage, {mascota: mascota}); // propiedad, valor
  }

  buscar(){
    this.navCtrl.push(this.buscarP, {mascotas: this.mascotas});

  }

  


}
