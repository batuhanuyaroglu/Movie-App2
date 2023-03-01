import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { PostService } from 'src/app/services/post.service';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

import {MatDialog} from '@angular/material/dialog';
import {MatMenuTrigger} from '@angular/material/menu';

export interface Movie {
  id: number;
  title: string;
  posterURL : string;
  imdbId: string;
}

@Component({
  selector: 'app-comedy',
  templateUrl: './comedy.component.html',
  styleUrls: ['./comedy.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ComedyComponent implements OnInit {

  movies : Movie | null | undefined;
  

  displayedColumns: string[] = ['id', 'title', 'posterURL', 'imdbId'];

 
  benimfilmler:any;
  comedies: any;
  imdblink: string = "";
  linkList: any = [] ;

  constructor(private service:PostService) { }

  ngOnInit() {
    this.service.getPostscomedy()
    .subscribe((response) => {
      this.comedies = response;
      
      console.log(this.comedies,"Comedies");
      this.movies=this.comedies;
      this.comedies.forEach((item: { imdbId: any; }) =>  {
        this.imdblink="https://www.imdb.com/title/"+item.imdbId;
        item.imdbId=this.imdblink;
      });
    });
    this.benimfilmler=this.movies
  }

}
