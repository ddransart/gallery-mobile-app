import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';
import { MeteoPage } from '../pages/meteo/meteo';
import { PlacesPage } from '../pages/places/places';
import { DetailImagePage } from '../pages/detail-image/detail-image';
import { NewPlacePage } from '../pages/new-place/new-place';
import { DetailPlacePage } from '../pages/detail-place/detail-place';


import { GalleryService } from '../services/gallery.service';
import { MeteoService } from '../services/meteo.service';
import { PlacesService } from '../services/places.service';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';




@NgModule({

  // Ng Declarations
  declarations: [
    MyApp,
    HomePage,
    GalleryPage,
    MeteoPage,
    PlacesPage,
    DetailImagePage,
    NewPlacePage,
    DetailPlacePage
  ],

  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__placedb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],

  bootstrap: [IonicApp],

  // Ionic Declarations
  entryComponents: [
    MyApp,
    HomePage,
    GalleryPage,
    MeteoPage,
    PlacesPage,
    DetailImagePage,
    NewPlacePage,
    DetailPlacePage
  ],

  providers: [
    StatusBar,
    GalleryService,
    MeteoService,
    PlacesService,
    Geolocation,
    Camera,
    SplashScreen,
    {
      provide:
        ErrorHandler,
        useClass: IonicErrorHandler
    }
  ]

})

export class AppModule { }