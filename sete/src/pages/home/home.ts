import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController, ActionSheetController, Platform } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { Data } from '../../providers/data';
import { Resposta } from './../resposta/resposta';

import { resposta } from './../../providers/resposta';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map', { read: ElementRef }) mapElement: ElementRef;
  map: any;

  @ViewChild('slides') slides: any;

  slideOptions: any;
  flashCardFlipped: boolean = false;

  hasAnswered: boolean = false;
  score: number = 0;

  questions: any;
  eolica: number = 0;
  solar: number = 0;
  hidreletrica: number = 0;

  constructor(public res: resposta, public navCtrl: NavController, public platform: Platform, af: AngularFire, public dataService: Data) {
    /*platform.ready().then(() => {
      this.loadMap();
    });*/
    this.slideOptions = {
      onlyExternal: true
    };
  }

  ionViewDidLoad() {
    this.dataService.load().then((data) => {
      data.map((question) => {
        let originalOrder = question.answers;
        //question.answers = this.randomizeAnswers(originalOrder);
        return originalOrder;
      });
      this.questions = data;
    });
  }

  nextSlide() {
    this.slides.slideNext();
  }

  regiao: string;
  ensolarado: string;
  ventilado: string;
  aguacorrente: string;
  casa: string;
  energia: string;
  espaco: string;
  limpa: string;
  tempestade: string;
  resultado: string;

  selectAnswer(answers, question) {
    this.hasAnswered = true;
    answers.selected = true;
    question.flashCardFlipped = true;
    //if (answer.correct) {
    switch (this.score) {
      case 0:
        this.regiao = answers.answer;
        switch (this.regiao) {
          case 'Centro-Oeste':
            this.eolica++;
            break;
          case 'Nordeste/Norte':
            this.solar++;
            this.hidreletrica++;
            break;
          case 'Sul':
            this.eolica++;
            break;
          case 'Sudeste':
            this.eolica++;
            this.solar++;
            break;
        }
        break;
      case 1:
        this.ensolarado = answers.answer;
        switch (this.ensolarado) {
          case "Sim":
            this.solar++;
            break;
        }
        break;
      case 2:
        this.ventilado = answers.answer;
        switch (this.ventilado) {
          case "Sim":
            this.eolica++;
            break;
        }
        break;
      case 3:
        this.aguacorrente = answers.answer;
        switch (this.aguacorrente) {
          case "Sim":
            this.hidreletrica++;
            break;
        }
        break;
      case 4:
        this.tempestade = answers.answer;
        switch (this.tempestade) {
          case "Sim":
            this.hidreletrica++;
            break;
        }
        break;
      case 5:
        this.casa = answers.answer;
        switch (this.casa) {
          case "Prédio":
            this.solar--;
            break;
          case "Casa":
            this.solar++;
            this.eolica++;
            break;
        }
        break;
      case 6:
        this.espaco = answers.answer;
        switch (this.espaco) {
          case "Sim":
            this.eolica++;
            this.solar++;
            break;
          case "Não":
            this.hidreletrica--;
            break;
        }
        break;
      case 7:
        this.energia = answers.answer;
        break;
      case 8:
        this.limpa = answers.answer;
        if(this.eolica >= this.solar && this.eolica >= this.hidreletrica){
          this.resultado = "Energia Eólica";
        }else{
          if(this.solar >= this.eolica && this.solar >= this.hidreletrica){
            this.resultado = "Energia Solar";
          }else{
            this.resultado = "Energia Hidrelétrica";
          }
        }
        this.restartQuiz();
        this.res = new resposta(this.resultado);
        this.navCtrl.setRoot(Resposta);
        break;
    }
    this.score++;
    //}
    setTimeout(() => {
      this.hasAnswered = false;
      this.nextSlide();
      answers.selected = false;
      question.flashCardFlipped = false;
    }, 2000);
  }

  randomizeAnswers(rawAnswers: any[]): any[] {
    for (let i = rawAnswers.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = rawAnswers[i];
      rawAnswers[i] = rawAnswers[j];
      rawAnswers[j] = temp;
    }
    return rawAnswers;
  }

  restartQuiz() {
    this.score = 0;
    //this.slides.slideTo(1, 1000);
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
