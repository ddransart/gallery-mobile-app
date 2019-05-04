import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';
import { MeteoPage } from '../pages/meteo/meteo';
import { PlacesPage } from '../pages/places/places';
import { DetailImagePage } from '../pages/detail-image/detail-image';


import { GalleryService } from '../services/gallery.service';


@NgModule({

  // Ng Declarations
  declarations: [
    MyApp,
    HomePage,
    GalleryPage,
    MeteoPage,
    PlacesPage,
    DetailImagePage
  ],

  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],

  bootstrap: [IonicApp],

  // Ionic Declarations
  entryComponents: [
    MyApp,
    HomePage,
    GalleryPage,
    MeteoPage,
    PlacesPage,
    DetailImagePage
  ],

  providers: [
    StatusBar,
    GalleryService,
    SplashScreen,
    {
      provide: 
      ErrorHandler, 
      useClass: IonicErrorHandler
    }
  ]

})

export class AppModule {}