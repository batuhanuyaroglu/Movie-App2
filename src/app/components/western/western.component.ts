import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { PostService } from 'src/app/services/post.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface Movie {
  id: number;
  title: string;
  posterURL: string;
  imdbId: string;
}


@Component({
  selector: 'app-western',
  templateUrl: './western.component.html',
  styleUrls: ['./western.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class WesternComponent implements AfterViewInit{
  movies: Movie | null | undefined;

  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;

  displayedColumns: string[] = ['id', 'title', 'posterURL', 'imdbId'];

  dataSource: MatTableDataSource<Movie>;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  
  ngAfterViewInit() {
    this.fetchPosts();
  }


  benimfilmler: any;
  westerns: any;
  imdblink: string = "";
  linkList: any = [];


  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];


  constructor(private service: PostService) {

  }


  // ngAfterViewInit() {
  //   this.fetchPosts();
  // }

  
  

  fetchPosts(): void {
    this.service.getPostswestern()
      .subscribe((response) => {
        this.westerns = response;
        
        this.dataSource = new MatTableDataSource<Movie>(Object.values(this.westerns));
        this.dataSource.paginator = this.paginator;
        new MatTableDataSource

        console.log(response);
        console.log(this.westerns, "Westerns");
        this.movies = this.westerns;
        this.westerns.forEach((item: { imdbId: any; }) => {
          this.imdblink = "https://www.imdb.com/title/" + item.imdbId;
          item.imdbId = this.imdblink;
        });
        
        
        
      },

      );

    this.benimfilmler = this.movies
  }


 

}
