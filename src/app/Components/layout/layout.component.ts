import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  inputSearch: string = '';
  constructor(private route: Router) {}

  AddMovies() {
    this.route.navigate(['/addmovie']);
  }
}
