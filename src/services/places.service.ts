import { Injectable } from "@angular/core";
import { Place } from "../model/place.model";
import { Storage } from '@ionic/storage';

// Gère tous les services
@Injectable()
export class PlacesService {

    private places: Array<Place> = [
        { title: "A" }, { title: "B" }, { title: "C" }
    ];

    constructor(public storage: Storage) {

    }

    addPlace(place: Place) {
        this.places.push(place);
        this.storage.set('places', this.places);
    }

    getAllPlaces() {
        //return this.places;
        return this.storage.get('places').then(
            data => {
                this.places = data!=null ? data:[];
                return this.places;
            }
        )
    }

}