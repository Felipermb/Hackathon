//importes de componente exerto
<<<<<<< HEAD
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { Component } from '@angular/core';
import firebase from 'firebase';
=======
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController, ActionSheetController, Platform } from 'ionic-angular';
// import { Geolocation } from '@ionic-native/geolocation';
// import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native';
>>>>>>> refs/remotes/origin/master

import { AuthService } from '../../providers/auth-service';
import { LoginPage } from './../login/login';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

<<<<<<< HEAD
  //musicas: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public authService: AuthService, public alertCtrl: AlertController, af: AngularFire, public actionSheetCtrl: ActionSheetController) {
    //Acessando Banco de Dados
    //console.log(af.database.list('/musicas'));
    //this.musicas = af.database.list('/musicas');
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        navCtrl.setRoot(LoginPage);
      }
    });
=======
  @ViewChild('map', { read: ElementRef }) mapElement: ElementRef;
  map: any;
  musicas: FirebaseListObservable<any>;


  constructor(public navCtrl: NavController, public alertCtrl: AlertController, platform: Platform,
    af: AngularFire, public actionSheetCtrl: ActionSheetController) {
    platform.ready().then(() => {
      this.loadMap();
    });
    //Acessando Banco de Dados
    console.log(af.database.list('/musicas'));
    this.musicas = af.database.list('/musicas');
>>>>>>> refs/remotes/origin/master
  }

  logout() {
    this.authService.doLogout();
  }

<<<<<<< HEAD
  /*mostrarOpcoes(musicaId, musicaTitulo){
=======
  loadMap(){

    let latLng = new google.maps.LatLng(-10.283783, -48.291471);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker();
  }

  addMarker(){

    let latLng = new google.maps.LatLng(-10.283783, -48.291471);
    let marker = new google.maps.Marker({
      map: this.map,
      position: latLng
    });

    // let content = "<h4>Information!</h4>";          

    // this.addInfoWindow(marker, content);

  }

  mostrarOpcoes(musicaId, musicaTitulo){
>>>>>>> refs/remotes/origin/master
    let actionSheet = this.actionSheetCtrl.create({
      title: 'O que você quer fazer?',
      buttons: [
      {
        text: 'Deletar Música',
        role: 'destructive',
        handler: () => {
          this.removerMusica(musicaId);
        }
      },{
        text: 'Atualizar Música',
        handler: () => {
          this.atualizarMusica(musicaId, musicaTitulo);
        }
      },{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar clicado');
        }
      }
      ]
    });
    actionSheet.present();
  }

  removerMusica(musicaId: string){
    this.musicas.remove(musicaId);
  }

  atualizarMusica(musicaId: string, musicaTitulo: string){
    let prompt = this.alertCtrl.create({
      title: 'Noma da Música',
      message: "Atualizar Música",
      inputs: [
      {
        name: 'tituloVar',
        placeholder: 'Título',
        value: musicaTitulo
      },
      ],
      buttons: [
      {
        text: 'Cancelar',
        handler: data => {
          console.log('Cancelar clicado');
        }
      },
      {
        text: 'Salvar',
        handler: data => {
          this.musicas.update(musicaId, {
            titulo: data.tituloVar
          });
        }
      }
      ]
    });
    prompt.present();
  }

  adicionarMusicas(){
<<<<<<< HEAD
        let prompt = this.alertCtrl.create({
        title: 'Nome da Música',
        message: "Entre com um nome para esta nova música ser adicionada",
        inputs: [
          {
            name: 'titulo',
            placeholder: 'Título'
          },
        ],
        buttons: [
          {
            text: 'Cancelar',
            handler: data => {
              console.log('Cancelar Clicado');
            }
          },
          {
            text: 'Salvar',
            handler: data => {
              this.musicas.push({
                titulo: data.titulo
              });
            }
          }
        ]
      });
      prompt.present();
  }*/
=======
    let prompt = this.alertCtrl.create({
      title: 'Nome da Música',
      message: "Entre com um nome para esta nova música ser adicionada",
      inputs: [
      {
        name: 'titulo',
        placeholder: 'Título'
      },
      ],
      buttons: [
      {
        text: 'Cancelar',
        handler: data => {
          console.log('Cancelar Clicado');
        }
      },
      {
        text: 'Salvar',
        handler: data => {
          this.musicas.push({
            titulo: data.titulo
          });
        }
      }
      ]
    });
    prompt.present();
  }
>>>>>>> refs/remotes/origin/master
}
