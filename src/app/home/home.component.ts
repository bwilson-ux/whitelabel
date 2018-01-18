import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'home',
  styleUrls: ['./home.style.css'],
  templateUrl: './home.template.html'
})
export class HomeComponent implements OnInit {

  public localState: any;
  constructor(
    public route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        /**
         * Your resolved data from route.
         */
        this.localState = data;
        this.loadView(this.localState);
      });


    /**
     * static data that is bundled
     * var mockData = require('assets/mock-data/mock-data.json');
     * console.log('mockData', mockData);
     * if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
     */
    this.asyncDataWithWebpack();
  }

  public loadView(data) {
    if (data && !_.isEmpty(data)) {
      console.log('TITLE:', data.title);
    }
  }

  private asyncDataWithWebpack() {
    /**
     * you can also async load mock data with 'es6-promise-loader'
     * you would do this if you don't want the mock-data bundled
     * remember that 'es6-promise-loader' is a promise
     */
    setTimeout(() => {

      System.import('../../assets/mock-data/home.json')
        .then((json) => {
          this.localState = json[0].res.data;
          this.loadView(this.localState);
        });

    });
  }

}
