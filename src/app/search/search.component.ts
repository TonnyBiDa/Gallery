import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	images:any[];
	imagesFound:boolean=false;
	searching:boolean=false;

	handleSuccess(data){
		this.imagesFound=true;
		this.images=data.hits;
		console.log(data);
	}

	handleError(error){
		console.log(error);
	}

  constructor(private _imageService: ImageService) { }

  searchImages(query:string){
  	this.searching=true;
  	return this._imageService.getSearchImages(query).subscribe(
  		data=>this.handleSuccess(data),
  		error=>this.handleError(error),
  		()=>this.searching=false
  		)
  }

  ngOnInit() {
  }

}
