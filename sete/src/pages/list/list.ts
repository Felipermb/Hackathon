import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DescricaoEnergia } from '../descricao-energia/descricao-energia';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  listaEnergias: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.listaEnergias = ["Energia Eólica", "Energia Solar", "Energia Maremotriz", "Energia Geotermica", "Energia Hidrelétrica", "Energia Nuclear"];
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DescricaoEnergia, {
      item: item
    });
  }

}
