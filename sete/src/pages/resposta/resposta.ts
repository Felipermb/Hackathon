import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Resposta page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
 	selector: 'page-resposta',
 	templateUrl: 'resposta.html',
 })
 export class Resposta {

 	tipoEnergia: any;
 	videos: any;
 	custo: any
 	curtoPrazo: any;


 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad Resposta');
 	}

 }
