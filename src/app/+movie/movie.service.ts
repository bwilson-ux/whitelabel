import { Injectable } from '@angular/core';
import { Movie } from './movie.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


// const MOVIES : Movie[] = [
//       {id: 1, name: 'Star Wars IV: A New Hope', released: 1968, rating: 10},
//       {id: 2, name: 'Indiana Jones and the Temple of Doom', released: 1984, rating: 9},
//       {id: 3, name: 'Bad Santa', released: 2001, rating: 5},
//     ];

@Injectable()
export class MovieService {

    constructor(private http: HttpClient) { }
    // private instance variable to hold base url
    private moviesUrl = 'https://swapi.co/api/';

    getMovie(array, id): Movie {
        return array.find(p => p.episode_id === id);
    }

    getMovies(url): Observable<Movie> {
        return this.http.get<Movie>(this.moviesUrl + url);
    }
    

}