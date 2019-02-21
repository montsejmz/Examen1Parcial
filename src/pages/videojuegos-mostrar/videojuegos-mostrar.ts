import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosPPage } from '../favoritos-p/favoritos-p';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the VideojuegosMostrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videojuegos-mostrar',
  templateUrl: 'videojuegos-mostrar.html',
})
export class VideojuegosMostrarPage {

  video={};
  imgs=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavoritosProvider) {
    this.video=this.navParams.get ('video');
    if (this.video.ad.hasOwnProperty('images')){
      this.imgs =this.video.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideojuegosMostrarPage');
  }

  favoritos(video){
    this.fav.addFavoritos(video);

  }

}
