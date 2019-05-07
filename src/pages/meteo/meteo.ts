import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MeteoService } from '../../services/meteo.service';

@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {

  ville: string = "";
  forecastData: any = { list: [] };

  constructor
    (
      public navCtrl: NavController,
      public navParams: NavParams,
      private meteoService: MeteoService,
      private loadCtrl: LoadingController
    ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeteoPage');
  }

  // Clic sur le bouton Données Météo
  onGetMeteo(dataForm) {

    // Pour le loader lors de la recherche
    let loading = this.loadCtrl.create({ content: "Chargement des données.<br> Veuillez patienter..." });
    loading.present();

    this.meteoService.chargerMeteo(dataForm.ville)
      .subscribe(data => {
        this.forecastData = data;

        // A la fin de la recherche
        loading.dismiss();

      }, err => {

        // A la fin de la recherche
        loading.dismiss();

        console.log(err);
      })


  }

}
