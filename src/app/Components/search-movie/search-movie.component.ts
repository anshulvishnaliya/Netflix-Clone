import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from 'src/app/Services/movie-service.service';
import { SharedDataService } from 'src/app/Services/shared-data.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnChanges {

  constructor(private TMDB: MovieServiceService, private route: Router, private sharedData: SharedDataService) { }

  @Input() searchKey: any = '';

  searchResult: Array<{ image: string, thumbImage: string, id: number, title: string, overview: string, genres: Array<number>, release_date: string }> = [];
  imagePath: string = 'https://image.tmdb.org/t/p/w500';

  // ngOnChanges is used because everytime movie name (searchKey) will be change it will call
  ngOnChanges(): void {
      this.TMDB.SearchByName(this.searchKey).subscribe({
      next: (data) => {
        this.searchResult = data.results.map( (movie: any) => ({
          image: this.imagePath + movie.poster_path,
          thumbImage: this.imagePath + movie.poster_path,
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          genres: movie.genre_ids, 
          release_date: movie.release_date 
        }))
        console.log(data.results);
        console.log(this.searchResult);
      },
      error: (error) => console.log(error.message)
    })   
  }

    // To get Clicked Image data according to movies section
    SearchResultImageDetail(index: any) {
      const clickedIndex = index;
      const clickedMovie = this.searchResult[clickedIndex];
      this.sharedData.updateImageData(clickedMovie)
      this.route.navigate(['/moviedetails']);
    }
}