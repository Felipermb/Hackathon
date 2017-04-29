import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlashCard } from './flash-card';

@NgModule({
  declarations: [
    FlashCard,
  ],
  imports: [
    IonicPageModule.forChild(FlashCard),
  ],
  exports: [
    FlashCard
  ]
})
export class FlashCardModule {}
