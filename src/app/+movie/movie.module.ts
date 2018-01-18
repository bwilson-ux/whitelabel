import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './movie.routes';
import { MovieComponent } from './movie.component';
import { OrderBy } from '../core/pipe/orderBy.pipe';

import {
  MatIconModule,
  MatListModule,
  MatCardModule
} from '@angular/material';

console.log('`Movie` bundle loaded asynchronously');

@NgModule({
  declarations: [
    OrderBy,
    /**
     * Components / Directives/ Pipes
     */
    MovieComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    RouterModule.forChild(routes),
  ],
})
export class MovieModule {
  public static routes = routes;
}
