import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/Services/movie-service.service';
import { SharedDataService } from 'src/app/Services/shared-data.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent {
  myMovieList: Array<any> = [];
  myReactiveForm: any;

  constructor(
    private route: Router,
    private updatedForm: SharedDataService
  ) {
    this.myReactiveForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
      ]),

      overview: new FormControl('', [
        Validators.required,
        Validators.maxLength(1000),
      ]),

      // genre: new FormControl('', [Validators.required]),

      releaseDate: new FormControl('', [Validators.required]),
      
      posterUrl: new FormControl('', [
        // Validators.pattern('^(http:\/\/www\.|https:\/\/www\.|www\.)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}\/?([^\s]*)$')
      ]),
    });
  }

  get getTitle() {
    return this.myReactiveForm.get('title');
  }

  get getOverview() {
    return this.myReactiveForm.get('overview');
  }

  get getGenre() {
    return this.myReactiveForm.get('genre');
  }

  get getReleaseDate() {
    return this.myReactiveForm.get('releaseDate');
  }

  get getPosterUrl() {
    return this.myReactiveForm.get('posterUrl');
  }

  onSubmitReactiveForm() {
    this.addMovie();
    this.route.navigate(['']);
  }

  addMovie() {
    const movieObject: { image: string, thumbImage: string, title: string, overview: string, release_date: string } = {
      image: this.myReactiveForm.value.posterUrl,
      thumbImage: this.myReactiveForm.value.posterUrl,
      title: this.myReactiveForm.value.title,
      release_date: this.myReactiveForm.value.releaseDate,
      overview: this.myReactiveForm.value.overview
    };
  
    this.updatedForm.updateFormData(movieObject);
    this.myMovieList.push(movieObject);
  }
}
