import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './movie-summary.routes';
import { MovieSummaryComponent } from './movie-summary.component';

import {
    MatCardModule
} from '@angular/material';

console.log('`MovieSummary` bundle loaded asynchronously');

@NgModule({
    declarations: [
        /**
         * Components / Directives/ Pipes
         */
        MovieSummaryComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
        RouterModule.forChild(routes),
    ],
})
export class MovieSummaryModule {
    public static routes = routes;
}
