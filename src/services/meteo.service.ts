import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";


@Injectable()
export class MeteoService {

    public host: string = "http://api.openweathermap.org/data/2.5/forecast?q=";

    constructor(private http: Http) { }

    chargerMeteo(city: string): Observable<any> {
        return this.http.get(this.host+city+"&APPID=28f4d26268b7c0e247c1e60fab25e867")
            .map(resp => resp.json())
    }
}

