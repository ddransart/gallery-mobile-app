import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import "rxjs/add/operator/map";

import { GalleryService } from '../../services/gallery.service';

import { DetailImagePage } from '../detail-image/detail-image';



@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})

export class GalleryPage {

  motCle: string = "";
  size: number = 10; // Nombre d'éléments à afficher sur la page. Conseillé : 15 max
  currentPage: number = 1;
  imagesData: any = { hits: [] };
  totalPages: number;

  constructor
    (
      public navCtrl: NavController, // controleur de navigation, utilisé pour nous aider à naviguer
      public navParams: NavParams,
      private galleryService: GalleryService,
      private loadCtrl: LoadingController // pour le loader lorsu'une qu'une recherche est en cours
    ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  // Initialisation du tableau à chaque clic sur le bouton, ensuite nouvelle recherche
  onSearch() {

    // Pour le loader lors de la recherche
    let loading = this.loadCtrl.create({ content: "Veuillez patienter..." });
    loading.present();

    this.imagesData.hits = [];
    this.doSearch();

    // A la fin de la recherche
    loading.dismiss();
  }

  // Recherche des images
  doSearch() {
    this.galleryService.chercher(this.motCle, this.size, this.currentPage)
      .subscribe(data => {
        // this.imagesData = data; si on veut afficher les éléments qui sont sur une seule page (sans pagination)
        this.totalPages = data.totalHits / this.size; // pour obtenir le nombre de pages
        if (this.totalPages % this.size != 0)++this.totalPages; // si impair, on incrémente
        data.hits.forEach(h => {
          this.imagesData.hits.push(h); // pour recharger la page tout les temps quand on arrive en fin de liste d'images (sans écraser les élts précédents)
        })
      }, err => {

        // A la fin de la recherche
        //loading.dismiss();
        console.log(err);
      })

  }

  // Scroll sur la page pour charger et afficher toutes les images des autres pages en donnant l'impression de rester sur la meme page
  doInfinite(infiniteScroll) {

    if (this.currentPage < this.totalPages) {
      ++this.currentPage;
      console.log(this.currentPage + "/" + this.totalPages); // test pour voir quand la page suivante charge dans la meme pag après le scroll
      this.doSearch();
      infiniteScroll.complete();
    }
  }

  // Clic sur l'image pour afficher la grande image
  onDetailImage(im) {
    this.navCtrl.push(DetailImagePage, { myBigImage: im });
  }


}