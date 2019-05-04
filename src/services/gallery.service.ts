import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";


@Injectable()
export class GalleryService {
    public host:string="https://pixabay.com/api/";

    constructor(private http:Http) {}

    chercher(query:string, size:number, page:number) : Observable<any> {
        return this.http.get(this.host+"?key=12371249-620b1913251db8f8b957af5a0&q"+query+"&per_page="+size+"&page="+page)
        .map(resp=>resp.json())
        
    }
}