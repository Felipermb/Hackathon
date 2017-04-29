import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Resposta } from './resposta';

@NgModule({
  declarations: [
    Resposta,
  ],
  imports: [
    IonicPageModule.forChild(Resposta),
  ],
  exports: [
    Resposta
  ]
})
export class RespostaModule {}
