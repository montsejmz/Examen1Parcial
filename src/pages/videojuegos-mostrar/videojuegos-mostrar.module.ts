import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideojuegosMostrarPage } from './videojuegos-mostrar';

@NgModule({
  declarations: [
    VideojuegosMostrarPage,
  ],
  imports: [
    IonicPageModule.forChild(VideojuegosMostrarPage),
  ],
})
export class VideojuegosMostrarPageModule {}
