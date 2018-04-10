import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';    //import class name here
import { fakeMovies } from "../fake-movies";

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

  movies = fakeMovies;

  constructor() { }

  ngOnInit() {
  }

  //onSelectOfMovie
    selectedMovie: Movie;
    onSelect(movie:Movie): void{
    this.selectedMovie = movie;
    console.log(`selectedMovie =  ${JSON.stringify(this.selectedMovie)}`);   
   // alert(`selectedMovie =  ${JSON.stringify(this.selectedMovie)}`); 
    //stingify convert object to string
    }


}
