import { MovieComponent } from './movie.component';

export const routes = [
  { path: '', children: [
    { path: '', component: MovieComponent },
    { path: 'summary/:episode_id', loadChildren: './+movie-summary#MovieSummaryModule' },
  ]},
];
