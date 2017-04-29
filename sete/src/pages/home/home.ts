import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController, ActionSheetController, Platform } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map', { read: ElementRef }) mapElement: ElementRef;
  map: any;

  nomes: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public platform: Platform, af: AngularFire) {
    /*platform.ready().then(() => {
      this.loadMap();
    });*/
    this.nomes = af.database.list('/userData');
    console.log(af.database.list('/userData'));
  }

  loadMap() {

    let latLng = new google.maps.LatLng(-10.283783, -48.291471);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker();
  }

  addMarker() {

    let latLng = new google.maps.LatLng(-10.283783, -48.291471);
    let marker = new google.maps.Marker({
      map: this.map,
      position: latLng
    });

    // let content = "<h4>Information!</h4>";

    // this.addInfoWindow(marker, content);

  }

}
