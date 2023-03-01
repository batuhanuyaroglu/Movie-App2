import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private url =  'https://api.sampleapis.com/movies/horror';
  private url2 = 'https://api.sampleapis.com/movies/classic';
  private url3 = 'https://api.sampleapis.com/movies/comedy';
  private url4 = 'https://api.sampleapis.com/movies/drama';
  private url5 = 'https://api.sampleapis.com/movies/family';
  private url6 = 'https://api.sampleapis.com/movies/mystery';
  private url7 = 'https://api.sampleapis.com/movies/scifi-fantasy';
  private url8 = 'https://api.sampleapis.com/movies/western';
 
  constructor(private httpClient: HttpClient) { }

  getPostshorror(){
    return this.httpClient.get(this.url);
  }
  getPostclasic(){
    
    return this.httpClient.get(this.url2);
  }
  getPostscomedy(){
    return this.httpClient.get(this.url3);
  }
  getPostsdrama(){
    return this.httpClient.get(this.url4);
  }
  getPostsfamily(){
    return this.httpClient.get(this.url5);
  }
  getPostsmystery(){
    return this.httpClient.get(this.url6);
  }
  getPostsscience(){
    return this.httpClient.get(this.url7);
  }
  getPostswestern(){
    return this.httpClient.get(this.url8);
  }

  
}
