import { Component, OnInit }                                                from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
    selector:     'my-app',
    templateUrl:  'public/themes/default/html/globalPage.html',
    styleUrls:    [ 'public/themes/default/css/global.css' ],
    directives:   [ ROUTER_DIRECTIVES ]
})

export class AppComponent implements OnInit {
  activeRouteLink: String = "";

  constructor (private location: Location, private router: ActivatedRoute) {
    this.activeRouteLink = location.path();
  }

  ngOnInit() {
    console.log(this.router);
  }
}
