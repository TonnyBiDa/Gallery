import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ImageService } from './image/shared/image.service';
import {RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { ImageFilerPipe } from './image/shared/filter.pipe';
import {appRoutes} from '../routes';
import { SearchComponent } from './search/search.component'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
//import { MasonryModule} from 'angular2-masonry';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageComponent,
    ImageFilerPipe,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    MaterialModule,     
    BrowserAnimationsModule,
    //MasonryModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],

  providers: [ImageService,ImageFilerPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
