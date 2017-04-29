import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2';

/**
 * Generated class for the Links page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
 	selector: 'page-links',
 	templateUrl: 'links.html',
 })
 export class Links {

 	tipoEnergia: FirebaseListObservable<any>;
 	descricao: any;
 	enderecoImage: any;
 	item: any;
 	lista: any;

 	constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
 		console.log("Item: "+navParams.data.item);
 		this.item = navParams.data.item;
 		switch (navParams.data.item) {
 			case "Energia Eólica":
 			console.log("entrou")
 			this.tipoEnergia = af.database.list('tipoEnergia/eolica/linksYoutube');
 			
 			break;
 			case "Energia Solar":
 			this.tipoEnergia = af.database.list('tipoEnergia/solar/linksYoutube');
 			
 			break;
 			case "Energia Maremotriz":
 			this.tipoEnergia = af.database.list('tipoEnergia/maremotriz/linksYoutube');
 			
 			break;
 			case "Energia Geotermica":
 			this.tipoEnergia = af.database.list('tipoEnergia/geotermica/linksYoutube');
 			
 			break;
 			case "Energia Hidrelétrica":
 			this.tipoEnergia = af.database.list('tipoEnergia/hidreletrica/linksYoutube');
 			
 			break;
 			case "Energia Nuclear":
 			this.tipoEnergia = af.database.list('tipoEnergia/nuclear/linksYoutube');
 			
 			break;
 			default:
 			console.log("Erro ao pegar a parada");
 			break;
 		}
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad Links');
 	}

 }
