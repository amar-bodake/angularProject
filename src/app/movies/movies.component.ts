import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';    //import class name here

@Component({
  selector: 'app-movies',   //selecter 
  templateUrl: './movies.component.html',    // decorater function
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie : Movie = {
    id:1,
    name: 'Hichaki',
    releaseYear: '2018'
  }

  constructor() { }

  ngOnInit() {
  }

}
