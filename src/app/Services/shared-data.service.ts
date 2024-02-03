import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  constructor() { }
  imageData: object = {};
  
  formData: { image: string, thumbImage: string, title: string, overview: string, release_date: string } = {
    image: '',
    thumbImage: '',
    title: '',
    overview: '',
    release_date: ''
  };

  updateFormData(data: { image: string, thumbImage: string, title: string, overview: string, release_date: string }) {
    this.formData = { 
      image: data.image,
      thumbImage: data.thumbImage, 
      title: data.title, 
      overview: data.overview, 
      release_date: data.release_date 
     };
  }

  updateImageData(data: any) {
    this.imageData = { ...data };
  }
}
