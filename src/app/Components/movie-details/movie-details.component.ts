import { Component } from '@angular/core';
import { SharedDataService } from 'src/app/Services/shared-data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent {
  constructor(private imageData: SharedDataService) { }

  imageDetails: any = this.imageData.imageData

}
