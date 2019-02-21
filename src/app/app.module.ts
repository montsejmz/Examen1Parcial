import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from '@angular/common/http'
import { MascotaPage } from '../pages/mascota/mascota';
import { EmpleoPage } from '../pages/empleo/empleo';
import { VideojuegosPage } from '../pages/videojuegos/videojuegos';
import { TabsPage } from '../pages/tabs/tabs';
import { EmpleosMostrarPage } from '../pages/empleos-mostrar/empleos-mostrar';
import { VideojuegosMostrarPage } from '../pages/videojuegos-mostrar/videojuegos-mostrar';
import { BuscarPage } from '../pages/buscar/buscar';
import { FavoritosProvider } from '../providers/favoritos/favoritos';
import { FavoritosPPage } from '../pages/favoritos-p/favoritos-p';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MascotaPage,
    EmpleoPage,
    VideojuegosPage,
    TabsPage,
    EmpleosMostrarPage,
    VideojuegosMostrarPage,
    BuscarPage,
    FavoritosPPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MascotaPage,
    EmpleoPage,
    VideojuegosPage,
    TabsPage,
    EmpleosMostrarPage,
    VideojuegosMostrarPage,
    BuscarPage,
    FavoritosPPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider
  ]
})
export class AppModule {}
