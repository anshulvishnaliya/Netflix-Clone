import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/Services/movie-service.service';
import { SharedDataService } from 'src/app/Services/shared-data.service';

@Component({
  selector: 'app-movies-to-display',
  templateUrl: './movies-to-display.component.html',
  styleUrls: ['./movies-to-display.component.css']
})
export class MoviesToDisplayComponent implements OnInit {
  constructor(private omdb: MovieServiceService, private sharedData: SharedDataService, private route: Router) {}

  myAddedMovies: Array<{ image: string, thumbImage: string, title: string, overview: string, release_date: string }> = [];
  trendingMovies: Array<{ image: string, thumbImage: string, id: number, title: string, overview: string, genres: Array<number>, release_date: string }> = [];
  nowPlayingMovies: Array<{ image: string, thumbImage: string, id: number, title: string, overview: string, genres: Array<number>, release_date: string }> = [];
  popularMovies: Array<{ image: string, thumbImage: string, id: number, title: string, overview: string, genres: Array<number>, release_date: string }> = [];
  topRatedMovies: Array<{ image: string, thumbImage: string, id: number, title: string, overview: string, genres: Array<number>, release_date: string }> = [];
  upcomingMovies: Array<{ image: string, thumbImage: string, id: number, title: string, overview: string, genres: Array<number>, release_date: string }> = [];

  imagePath: string = 'https://image.tmdb.org/t/p/w500';

  ngOnInit(): void {

    // Get Trending Movies
    this.omdb.GetTrendingMovies().subscribe({
      next: (data) => {
        this.trendingMovies = data.results.map( (movie: any) => ({
          image: this.imagePath + movie.poster_path,
          thumbImage: this.imagePath + movie.poster_path,
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          genres: movie.genre_ids, 
          release_date: movie.release_date 
        }))
      },
      error: (error) => console.log(error.message)
    })   

    // Get Now Playing Movies
    this.omdb.GetNowPlayingMovies().subscribe({
      next: (data) => {
        this.nowPlayingMovies = data.results.map( (movie: any) => ({
          image: this.imagePath + movie.poster_path,
          thumbImage: this.imagePath + movie.poster_path,
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          genres: movie.genre_ids, 
          release_date: movie.release_date 
        }))
      },
      error: (error) => console.log(error.message)
    })    

    // Get Popular Movies
    this.omdb.GetPopularMovies().subscribe({
      next: (data) => {
        this.popularMovies = data.results.map( (movie: any) => ({
          image: this.imagePath + movie.poster_path,
          thumbImage: this.imagePath + movie.poster_path,
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          genres: movie.genre_ids, 
          release_date: movie.release_date 
        }))
      },
      error: (error) => console.log(error.message)
    })   

    // Get Top Rated Movies
    this.omdb.GetTopRatedMovies().subscribe({
      next: (data) => {
        this.topRatedMovies = data.results.map( (movie: any) => ({
          image: this.imagePath + movie.poster_path,
          thumbImage: this.imagePath + movie.poster_path,
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          genres: movie.genre_ids, 
          release_date: movie.release_date 
        }))
      },
      error: (error) => console.log(error.message)
    })   

    // Get Upcoming Movies
    this.omdb.GetUpcomingMovies().subscribe({
      next: (data) => {
        this.upcomingMovies = data.results.map( (movie: any) => ({
          image: this.imagePath + movie.poster_path,
          thumbImage: this.imagePath + movie.poster_path,
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          genres: movie.genre_ids, 
          release_date: movie.release_date 
        }))
      },
      error: (error) => console.log(error.message)
    })   

    // My Added Movies
    if (this.sharedData.formData.title !== '') {
      this.myAddedMovies.push(this.sharedData.formData);
    }
    console.log(this.myAddedMovies);
    
  }

  // To get Clicked Image data according to movies section
  MyMoviesImageDetail(index: any) {
    const clickedIndex = index;
    const clickedMovie = this.myAddedMovies[clickedIndex];
    this.sharedData.updateImageData(clickedMovie)
    this.route.navigate(['/moviedetails']);
  }

  TrendingImageDetail(index: any) {
    const clickedIndex = index;
    const clickedMovie = this.trendingMovies[clickedIndex];
    this.sharedData.updateImageData(clickedMovie)
    this.route.navigate(['/moviedetails']);
  }
 
  NowPlayingImageDetail(index: any) {
    const clickedIndex = index;
    const clickedMovie = this.nowPlayingMovies[clickedIndex];
    this.sharedData.updateImageData(clickedMovie)
    this.route.navigate(['/moviedetails']);
  }

  PopularImageDetail(index: any) {
    const clickedIndex = index;
    const clickedMovie = this.popularMovies[clickedIndex];
    this.sharedData.updateImageData(clickedMovie)
    this.route.navigate(['/moviedetails']);
  }

  TopRatedImageDetail(index: any) {
    const clickedIndex = index;
    const clickedMovie = this.topRatedMovies[clickedIndex];
    this.sharedData.updateImageData(clickedMovie)
    this.route.navigate(['/moviedetails']);
  }

  UpcomingImageDetail(index: any) {
    const clickedIndex = index;
    const clickedMovie = this.upcomingMovies[clickedIndex];
    this.sharedData.updateImageData(clickedMovie)
    this.route.navigate(['/moviedetails']);
  }
}
