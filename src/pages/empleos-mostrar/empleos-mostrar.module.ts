import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpleosMostrarPage } from './empleos-mostrar';

@NgModule({
  declarations: [
    EmpleosMostrarPage,
  ],
  imports: [
    IonicPageModule.forChild(EmpleosMostrarPage),
  ],
})
export class EmpleosMostrarPageModule {}
