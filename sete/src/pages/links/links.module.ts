import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Links } from './links';

@NgModule({
  declarations: [
    Links,
  ],
  imports: [
    IonicPageModule.forChild(Links),
  ],
  exports: [
    Links
  ]
})
export class LinksModule {}
