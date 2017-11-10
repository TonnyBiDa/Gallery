import { Component,OnChanges,Input } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges{
  title = 'Photo Labrary';
  @Input() filterBy?:string = 'all';
  visiableImages=[];
  constructor(private imageService:ImageService){
  	this.visiableImages=this.imageService.getImages();
  }

  ngOnChanges(){
  	this.visiableImages=this.imageService.getImages();
  }
}	