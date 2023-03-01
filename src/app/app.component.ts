import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {Subject} from 'rxjs'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  posts:any;
  clasics:any;
  horrors:any;
  comedies:any;
  dramas:any;
  families:any;
  mysteries:any;
  sciences:any;
  westerns:any;

  
  
  constructor(private service:PostService) {}
  
  ngOnInit() {
      this.service.getPostshorror()
        .subscribe(response => {
          this.horrors = response;
          console.log(this.horrors, "Horrors");
          
        });

        this.service.getPostclasic()
        .subscribe(response => {
          this.clasics = response;
          
          console.log(this.clasics,"Clasics");
          
        });
        
        this.service.getPostscomedy()
        .subscribe(response => {
          this.comedies = response;
          console.log(this.comedies, "Comedies");
          
        });

        this.service.getPostsdrama()
        .subscribe(response => {
          this.dramas = response;
          console.log(this.dramas, "Dramas");
          
        });

        this.service.getPostsfamily()
        .subscribe(response => {
          this.families = response;
          console.log(this.families, "Families");
          
        });

        this.service.getPostsmystery()
        .subscribe(response => {
          this.mysteries = response;
          console.log(this.mysteries, "Mysteries");
          
        });

        this.service.getPostsscience()
        .subscribe(response => {
          this.sciences = response;
          console.log(this.sciences, "Sciences");
          
        });

        this.service.getPostswestern()
        .subscribe(response => {
          this.westerns = response;
          console.log(this.westerns, "Westerns");
          
        });


  }

    
  title = 'MovieProje';
}
