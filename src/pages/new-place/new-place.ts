import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PlacesService } from '../../services/places.service';


import { Place } from '../../model/place.model';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { BrowserPlatformLocation } from '@angular/platform-browser/src/browser/location/browser_platform_location';


@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})

export class NewPlacePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public placesService: PlacesService, private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlacePage');
  }

  onAddPlace(place: Place) {
    place.location = { longitude: 0, latitude: 0 };
    place.timestamp = new Date().getTime();

    // Geolocation Google Security
    navigator.geolocation.getCurrentPosition(success => {
      /* Do some magic. */
      place.location.longitude = success.coords.longitude;
      place.location.latitude = success.coords.latitude;
      this.placesService.addPlace(place);
      this.navCtrl.pop(); // pour revenir à la page précédente

    }, failure => {
      if (failure.message.startsWith("Only secure origins are allowed")) {
        // Secure Origin issue.
        place.location.longitude = 0;
        place.location.latitude = 0;
        this.placesService.addPlace(place);
        this.navCtrl.pop();
      }
    });


    //this.geolocation.getCurrentPosition()
    //  .then(resp => {
    //   place.location.longitude = resp.coords.longitude;
    //   place.location.latitude = resp.coords.latitude;
    //  this.placesService.addPlace(place);
    //  this.navCtrl.pop(); // pour revenir à la page précédente
    // }
    // ).catch(err => {
    // S'il y a un souci de n'importe quel nature ou si l'user n'autorise pas à détecter sa position
    //   place.location.longitude = 0;
    //  place.location.latitude = 0;
    //  this.placesService.addPlace(place);
    //  this.navCtrl.pop();
    // }
    //  );



  }
}
