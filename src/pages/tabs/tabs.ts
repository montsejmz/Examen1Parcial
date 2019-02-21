import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EmpleoPage } from '../empleo/empleo';
import { VideojuegosPage } from '../videojuegos/videojuegos';
import { FavoritosPPage } from '../favoritos-p/favoritos-p';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1=HomePage;
  tab2=EmpleoPage;
  tab3=VideojuegosPage
  tab4=FavoritosPPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
