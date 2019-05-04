import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detail-image',
  templateUrl: 'detail-image.html',
})

export class DetailImagePage {

  image:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) // permet de récupérer les paramètres
    {
      this.image=this.navParams.data.myBigImage;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailImagePage');
  }

}
