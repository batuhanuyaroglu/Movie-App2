import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  posts:any;
  clasics:any;
  constructor(private service:PostService) {}
  
  ngOnInit() {
      // this.service.getPosts()
      //   .subscribe(response => {
      //     this.posts = response;
      //     console.log(this.posts, "Posts");
          
      //   });

        this.service.getPostclasic()
        .subscribe(response => {
          this.clasics = response;
          
          console.log(this.clasics,"Clasics");
          
        });
  }

    
  title = 'MovieProje';
}
