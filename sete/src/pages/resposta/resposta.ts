import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

import { Links } from '../links/links';
import { DescricaoEnergia } from '../descricao-energia/descricao-energia';

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
 	enderecoImage: any;

 	constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
 		// this.tipoEnergia = 

 		switch (navParams.data.item) {
 			case "Energia Éolica":
 			console.log("entrou")
 			this.tipoEnergia = af.database.object('tipoEnergia/eolica', { preserveSnapshot: true});
 			this.tipoEnergia.subscribe(snapshot => {
 				console.log(snapshot.val().descricao + " -- "+ snapshot.val().imagem);
 				this.enderecoImage = snapshot.val().imagem;
 			});
 			break;
 			case "Energia Solar":
 			this.tipoEnergia = af.database.object('tipoEnergia/solar', { preserveSnapshot: true});
 			this.tipoEnergia.subscribe(snapshot => {
 				console.log(snapshot.val().descricao + " -- "+ snapshot.val().imagem);
 				this.enderecoImage = snapshot.val().imagem;
 			});
 			break;
 			case "Energia Maremotriz":
 			this.tipoEnergia = af.database.object('tipoEnergia/maremotriz', { preserveSnapshot: true});
 			this.tipoEnergia.subscribe(snapshot => {
 				console.log(snapshot.val().descricao + " -- "+ snapshot.val().imagem);
 				this.enderecoImage = snapshot.val().imagem;
 			});
 			break;
 			case "Energia Geotermica":
 			this.tipoEnergia = af.database.object('tipoEnergia/geotermica', { preserveSnapshot: true});
 			this.tipoEnergia.subscribe(snapshot => {
 				console.log(snapshot.val().descricao + " -- "+ snapshot.val().imagem);
 				this.enderecoImage = snapshot.val().imagem;
 			});
 			break;
 			case "Energia Hidréletrica":
 			this.tipoEnergia = af.database.object('tipoEnergia/hidreletrica', { preserveSnapshot: true});
 			this.tipoEnergia.subscribe(snapshot => {
 				console.log(snapshot.val().descricao + " -- "+ snapshot.val().imagem);
 				this.enderecoImage = snapshot.val().imagem;
 			});
 			break;
 			case "Energia Nuclear":
 			this.tipoEnergia = af.database.object('tipoEnergia/nuclear', { preserveSnapshot: true});
 			this.tipoEnergia.subscribe(snapshot => {
 				console.log(snapshot.val().descricao + " -- "+ snapshot.val().imagem);
 				this.enderecoImage = snapshot.val().imagem;
 			});
 			break;
 			default:
 			console.log("Erro ao pegar a parada");
 			break;
 		}
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad Resposta');
 	}

 	itemTapped() {
 		// That's right, we're pushing to ourselves!
 		this.navCtrl.push(Links, {
 			item: this.tipoEnergia
 		});
 	}

 	descricaoPage() {
 		// That's right, we're pushing to ourselves!
 		this.navCtrl.push(DescricaoEnergia, {
 			 item: this.tipoEnergia
 		});
 	}

 }
