import { Component, OnInit } from '@angular/core';
import {NgxGalleryAction, NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit(): void {

    this.galleryOptions = [
      {
        image: false,
        height: '180px',
        width: '720px',
        previewZoom: true,
        previewCloseOnEsc: true,
        previewRotate: true,
        imageAnimation: NgxGalleryAnimation.Slide,
        arrowPrevIcon: "fa fa-arrow-circle-o-left",
        arrowNextIcon: "fa fa-arrow-circle-o-right",
        closeIcon: "fa fa-window-close",
        fullscreenIcon: "fa fa-arrows",
        spinnerIcon: "fa fa-refresh fa-spin fa-3x fa-fw",
        previewFullscreen: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
        previewZoom: true,
        previewRotate: true,
      }
    ];



    this.galleryImages = [
      {
        small: 'assets/data/images/1.jpeg',
        medium: 'assets/data/images/1.jpeg',
        big: 'assets/data/images/1.jpeg'
      },
      {
        small: 'assets/data/images/2.jpeg',
        medium: 'assets/data/images/2.jpeg',
        big: 'assets/data/images/2.jpeg'
      },
      {
        small: 'assets/data/images/3.jpeg',
        medium: 'assets/data/images/3.jpeg',
        big: 'assets/data/images/3.jpeg'
      },{
        small: 'assets/data/images/4.jpeg',
        medium: 'assets/data/images/4.jpeg',
        big: 'assets/data/images/4.jpeg'
      },
      {
        small: 'assets/data/images/5.jpeg',
        medium: 'assets/data/images/5.jpeg',
        big: 'assets/data/images/5.jpeg'
      }
    ];

  }

}
