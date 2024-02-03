import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieServiceService } from './Services/movie-service.service';
import { AddMovieComponent } from './Components/add-movie/add-movie.component';
import { MoviesToDisplayComponent } from './Components/movies-to-display/movies-to-display.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { SearchMovieComponent } from './Components/search-movie/search-movie.component';
import { SharedDataService } from './Services/shared-data.service';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AddMovieComponent,
    MoviesToDisplayComponent,
    SearchMovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    
  ],
  providers: [MovieServiceService, SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
