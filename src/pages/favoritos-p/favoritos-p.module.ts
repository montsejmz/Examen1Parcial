import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritosPPage } from './favoritos-p';

@NgModule({
  declarations: [
    FavoritosPPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritosPPage),
  ],
})
export class FavoritosPPageModule {}
