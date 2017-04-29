import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

 @IonicPage()
 @Component({
 	selector: 'page-descricao-energia',
 	templateUrl: 'descricao-energia.html',
 })
 export class DescricaoEnergia {

 	tipoEnergia: FirebaseObjectObservable<any>;
 	descricao: any;
 	enderecoImage: any;
	titulo: any;
 	item: any;

 	constructor(public navCtrl: NavController, public navParams: NavParams,  af: AngularFire) {
 		
 		console.log("Item: "+navParams.data.item);
 		this.item = navParams.data.item;
 		switch (navParams.data.item) {
 			case "Energia Éolica":
 			//console.log("entrou")
 			this.tipoEnergia = af.database.object('tipoEnergia/eolica', { preserveSnapshot: true});
 			this.tipoEnergia.subscribe(snapshot => {
 				//console.log(snapshot.val().descricao + " -- "+ snapshot.val().imagem);
 				this.descricao = snapshot.val().descricao;
				this.titulo = "Energia Éolica";
 				this.enderecoImage = snapshot.val().imagem;
 			});
 			break;
 			case "Energia Solar":
 			this.tipoEnergia = af.database.object('tipoEnergia/solar', { preserveSnapshot: true});
 			this.tipoEnergia.subscribe(snapshot => {
 				//console.log(snapshot.val().descricao + " -- "+ snapshot.val().imagem);
 				this.descricao = snapshot.val().descricao;
 				this.enderecoImage = snapshot.val().imagem;
				 this.titulo = "Energia Éolica";
 			});
 			break;
 			case "Energia Maremotriz":
 			this.tipoEnergia = af.database.object('tipoEnergia/maremotriz', { preserveSnapshot: true});
 			this.tipoEnergia.subscribe(snapshot => {
 				//console.log(snapshot.val().descricao + " -- "+ snapshot.val().imagem);
 				this.descricao = snapshot.val().descricao;
 				this.enderecoImage = snapshot.val().imagem;
				 this.titulo = "Energia Maremotriz";
 			});
 			break;
 			case "Energia Geotermica":
 			this.tipoEnergia = af.database.object('tipoEnergia/geotermica', { preserveSnapshot: true});
 			this.tipoEnergia.subscribe(snapshot => {
 				//console.log(snapshot.val().descricao + " -- "+ snapshot.val().imagem);
 				this.descricao = snapshot.val().descricao;
 				this.enderecoImage = snapshot.val().imagem;
				 this.titulo = "Energia Geotermica";
 			});
 			break;
 			case "Energia Hidréletrica":
 			this.tipoEnergia = af.database.object('tipoEnergia/hidreletrica', { preserveSnapshot: true});
 			this.tipoEnergia.subscribe(snapshot => {
 				//console.log(snapshot.val().descricao + " -- "+ snapshot.val().imagem);
 				this.descricao = snapshot.val().descricao;
 				this.enderecoImage = snapshot.val().imagem;
				 this.titulo = "Energia Hidréletrica";
 			});
 			break;
 			case "Energia Nuclear":
 			this.tipoEnergia = af.database.object('tipoEnergia/nuclear', { preserveSnapshot: true});
 			this.tipoEnergia.subscribe(snapshot => {
 				//console.log(snapshot.val().descricao + " -- "+ snapshot.val().imagem);
 				this.descricao = snapshot.val().descricao;
 				this.enderecoImage = snapshot.val().imagem;
				 this.titulo = "Energia Nuclear";
 			});
 			break;
 			default:
 			console.log("Erro ao pegar a parada");
 			break;
 		}

 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad DescricaoEnergia');
 	}

 }
