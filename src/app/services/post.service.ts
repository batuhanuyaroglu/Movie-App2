import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private url = 'https://api.sampleapis.com/movies/animation';
  private url2 = 'https://api.sampleapis.com/movies/classic';
  // private url3 = 'https://api.sampleapis.com/movies/animation';
  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get(this.url);
  }
  getPostclasic(){
    
    return this.httpClient.get(this.url2);
  }

  // getPostanimation(){
  //   return this.httpClient.get(this.url3);
  // }
}
