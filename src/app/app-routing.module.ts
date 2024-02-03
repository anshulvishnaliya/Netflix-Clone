import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './Components/add-movie/add-movie.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/layout', pathMatch: 'full' },
  { path: 'layout', component: LayoutComponent },
  { path: 'addmovie', component: AddMovieComponent },
  { path: 'moviedetails', component: MovieDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
