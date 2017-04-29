import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DescricaoEnergia } from './descricao-energia';

@NgModule({
  declarations: [
    DescricaoEnergia,
  ],
  imports: [
    IonicPageModule.forChild(DescricaoEnergia),
  ],
  exports: [
    DescricaoEnergia
  ]
})
export class DescricaoEnergiaModule {}
