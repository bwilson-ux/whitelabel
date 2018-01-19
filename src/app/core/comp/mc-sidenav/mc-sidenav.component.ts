import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';



/** @title Responsive sidenav */
@Component({
  selector: 'mc-sidenav',
  templateUrl: 'mc-sidenav.template.html',
  styleUrls: ['./mc-sidenav.styles.scss']

})
export class McSidenav {
  mobileQuery: MediaQueryList;

  fillerNav = [{
    name: 'Home',
    link: './home'
  }, {
    name: 'Movies',
    link: './movies'
  }, {
    name: 'About',
    link: './about'
  }];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  opened = true;
}


/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */