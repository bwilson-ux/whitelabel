import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { MovieService } from "../movie.service";
import { Movie } from "../movie.interface";

@Component({
  selector: 'movie-summary',
  template: require('./movie-summary.template.html'),
  styles: []
})
export class MovieSummaryComponent implements OnInit, OnDestroy {
  movie: Movie;
  sub: any;

  constructor(private route: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['episode_id']);

      console.log('ID', id);

      this.movieService.getMovies('films').subscribe((result: any) => {
        this.movie = this.movieService.getMovie(result.results, id);
      }, (error: any) => {
        if (typeof error['Errors'] != "undefined") {
          console.log(error['Errors']);
        }
      });


    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}