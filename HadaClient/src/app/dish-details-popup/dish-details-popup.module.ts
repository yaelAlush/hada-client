import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DishDetailsPopupComponent } from './dish-details-popup';

@NgModule({
  declarations: [
    DishDetailsPopupComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    DishDetailsPopupComponent
  ]
})
export class DishDetailsPopupComponentModule {}
