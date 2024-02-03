import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) { }
  apiKey: string = '001b1231b047c07c8f3d82a9cc58317f';
  baseUrl: string = 'https://api.themoviedb.org/3';
  movie_list: Array<string> = ['trending', 'now_playing', 'popular', 'top_rated', 'upcoming'];

  GetTrendingMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/${this.movie_list[0]}/movie/day?api_key=${this.apiKey}`);
  }

  GetNowPlayingMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${this.movie_list[1]}?api_key=${this.apiKey}`);
  }

  GetPopularMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${this.movie_list[2]}?api_key=${this.apiKey}`);
  }

  GetTopRatedMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${this.movie_list[3]}?api_key=${this.apiKey}`);
  }

  GetUpcomingMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${this.movie_list[4]}?api_key=${this.apiKey}`);
  }

  GetMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie?api_key=${this.apiKey}`);
  }

  SearchByName(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/movie?query=${query}&api_key=${this.apiKey}`);
  }

  createMovie() {
    const movieData = {
      title: 'My Gentle Kidney',
      overview: 'Your movie description here',
      vote_average: 4.4
    };
  
    // Define your request headers (including your API key).
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.apiKey
    });
  
    // Define the URL for creating a movie.
    const url = `${this.baseUrl}/list/1/add_item?api_key=${this.apiKey}`;
  
    // Send the POST request to create the movie.
    return this.http.post(url, movieData);
  }
}