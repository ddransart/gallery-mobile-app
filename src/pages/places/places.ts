import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Place } from '../../model/place.model';
import { PlacesService } from '../../services/places.service';
import { NewPlacePage } from '../new-place/new-place';
import { DetailPlacePage } from '../detail-place/detail-place';

@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})

export class PlacesPage {

  places: Array<Place>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public placesService: PlacesService) {
  }

  // Charge l'objet (cycle de vie)
  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }

  // Une fois que l'objet est chargé (cycle de vie)
  ionViewWillEnter() {

    //this.places = this.placesService.getAllPlaces();
    this.placesService.getAllPlaces().then(
      data => {
        this.places = data;
      }
    )
  }

  // Clic sur le bouton New
  onNewPlace() {
    this.navCtrl.push(NewPlacePage);
  }

  // Clic sur une place
  onDetailPlace(p: Place) {
    this.navCtrl.push(DetailPlacePage, { place: p });
  }

}
