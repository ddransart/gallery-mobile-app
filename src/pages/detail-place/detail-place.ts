import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Place } from '../../model/place.model';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@IonicPage()
@Component({
  selector: 'page-detail-place',
  templateUrl: 'detail-place.html',
})

export class DetailPlacePage {

  place: Place;
  photoUser: String;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public camera: Camera,
    public alertCtrl: AlertController
  ) {
    this.place = this.navParams.get('place');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPlacePage');
  }

  // Clic sur Btn Prendre une photo
  onTakePicture() {
    const option1: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: true,
      targetWidth: 320,
      targetHeight: 240
    };

    const option2: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      targetWidth: 320,
      targetHeight: 240
    };

    // Alert Creation
    let alert = this.alertCtrl.create({
      title: "source",
      subTitle: 'Quelle source ?',
      buttons: [
        { text: 'Camera', handler: () => { this.takePicture(option1); } },
        { text: 'Library', handler: () => { this.takePicture(option2); } }
      ]
    });

    // Afficher l'alerte
    alert.present();



    // Google Camera API
    // navigator.mediaDevices.getUserMedia({ video: true })
    //  .then(gotMedia)
    //  .catch(error => console.error('getUserMedia() error:', error));

    // function gotMedia(mediaStream) {
    //  const mediaStreamTrack = mediaStream.getVideoTracks()[0];
    //  const imageCapture = new ImageCapture(mediaStreamTrack);
    //  console.log(imageCapture);

    //  const imgUser = document.querySelector('img');
    //  imageCapture.takePhoto()
    //    .then(blob => {
    //      imgUser.src = URL.createObjectURL(blob);
    //      imgUser.onload = () => { URL.revokeObjectURL(this.src); }
    //   })
    //    .catch(error => console.error('takePhoto() error:', error));
    // }
  }

  // photographier
  takePicture(options) {
    this.camera.getPicture(options)
      .then(imageData => {
        this.photoUser = 'data:image/jpeg;base64,' + imageData; // conversion du format de la photo en base 64
      })
      .catch(err => {
        console.log(err);
        //Afficher aussi une alerte à l'user si jamais il y aurait un souci de prise de photo.
      })
  }
}