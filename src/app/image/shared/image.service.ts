import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class ImageService{
visibleimags=[];
   
private query: string;
private API_KEY: string=environment.PIXABAY_API_KEY;
private API_URL: string=environment.PIXABAY_API_URL;
private URL: string=this.API_URL+this.API_KEY+'&q=';
private prePage:string='&per_page=10';


constructor(private _http: Http){}

getSearchImages(query){
	return this._http.get(this.URL+query+this.prePage).map(res=>res.json());
}

getImages(){
	return this.visibleimags=IMAGES.slice(0); 
}

getImage(id:number){
	return IMAGES.slice(0).find(x=>x.id==id);
}

}


const IMAGES = [
{"id":1,"category":"people","caption":"live1","url":"assets/img/people_01.jpeg"},
{"id":2,"category":"people","caption":"live2","url":"assets/img/people_02.jpeg"},
{"id":3,"category":"people","caption":"live3","url":"assets/img/people_03.jpeg"},
{"id":4,"category":"people","caption":"live4","url":"assets/img/people_04.jpeg"},
{"id":5,"category":"people","caption":"live5","url":"assets/img/people_05.jpeg"},
{"id":6,"category":"view","caption":"beauty1","url":"assets/img/view_01.jpeg"},
{"id":7,"category":"view","caption":"beauty2","url":"assets/img/view_02.jpeg"},
{"id":8,"category":"view","caption":"beauty3","url":"assets/img/view_03.jpeg"},
{"id":9,"category":"view","caption":"beauty4","url":"assets/img/view_04.jpeg"},
{"id":10,"category":"view","caption":"beauty5","url":"assets/img/view_05.jpeg"},
{"id":11,"category":"food","caption":"taste1","url":"assets/img/food_01.jpeg"},
{"id":12,"category":"food","caption":"taste2","url":"assets/img/food_02.jpeg"},
{"id":13,"category":"food","caption":"taste3","url":"assets/img/food_03.jpeg"},
{"id":14,"category":"food","caption":"taste4","url":"assets/img/food_04.jpeg"},
{"id":15,"category":"food","caption":"taste5","url":"assets/img/food_05.jpeg"},
{"id":16,"category":"food","caption":"taste6","url":"assets/img/food_06.jpeg"},
]
