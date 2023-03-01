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
  selector: 'app-mystery',
  templateUrl: './mystery.component.html',
  styleUrls: ['./mystery.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MysteryComponent implements OnInit {

  movies : Movie | null | undefined;
  

  displayedColumns: string[] = ['id', 'title', 'posterURL', 'imdbId'];

 
  benimfilmler:any;
  mysteries: any;
  imdblink: string = "";
  linkList: any = [] ;

  constructor(private service:PostService) { }

  ngOnInit() {
    this.service.getPostsmystery()
    .subscribe((response) => {
      this.mysteries = response;
      
      console.log(this.mysteries,"Mysteries");
      this.movies=this.mysteries;
      this.mysteries.forEach((item: { imdbId: any; }) =>  {
        this.imdblink="https://www.imdb.com/title/"+item.imdbId;
        item.imdbId=this.imdblink;
      });
    });
    this.benimfilmler=this.movies
  }

}
