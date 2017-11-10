import  {Routes} from "@angular/router"
import { GalleryComponent } from "./app/gallery/gallery.component"
import  {ImageComponent} from "./app/image/image.component"
import  {SearchComponent} from "./app/search/search.component"

export const appRoutes:Routes=[
	{path:"photo_labrary", component: GalleryComponent},
	{path:"search", component: SearchComponent},
	{path:"image/:id", component: ImageComponent},
	{path:"", redirectTo:"/photo_labrary", pathMatch:'full'},

];
