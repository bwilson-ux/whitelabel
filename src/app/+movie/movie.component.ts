import {
  Component,
  OnInit,
} from '@angular/core';

import { Movie } from './movie.interface';
import { MovieService } from "./movie.service";

/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Movie` component loaded asynchronously');

@Component({
  selector: 'movie',
  template: require('./movie.template.html'),
})


export class MovieComponent implements OnInit {

  movies: Movie[];
  onlineMovies = [];

  constructor(private movieService: MovieService) { }

  public ngOnInit() {

    this.movieService.getMovies('films').subscribe((result: any) => {
      let res = result;
      this.movies = res.results;
    }, (error: any) => {
      if (typeof error['Errors'] != "undefined") {
        console.log(error['Errors']);
      }
    });
  }
}