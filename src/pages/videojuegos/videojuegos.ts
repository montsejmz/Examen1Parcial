import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { VideojuegosMostrarPage } from '../videojuegos-mostrar/videojuegos-mostrar';
import { BuscarPage } from '../buscar/buscar';

/**
 * Generated class for the VideojuegosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videojuegos',
  templateUrl: 'videojuegos.html',
})
export class VideojuegosPage {

  videos=[];
  videoPage = VideojuegosMostrarPage;
  buscarP=BuscarPage;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {

    this.http.get('/v1/klfst?&category=5060&offset=1&lim=29&lang=es')
    .subscribe(data =>{
      //console.log(JSON.stringify(data));
      if (data.hasOwnProperty('list_ads')){
        this.videos= data ['list_ads']
      }
    }, error=>{
      console.log(JSON.stringify(error));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideojuegosPage');
  }

  verVideo(video){
    this.navCtrl.push(this.videoPage, {video:video});
  }

  buscar(){
    this.navCtrl.push(this.buscarP, {mascotas:this.videos})
  }

}
