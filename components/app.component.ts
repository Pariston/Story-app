import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector:     'my-app',
    templateUrl:  'public/themes/default/html/globalPage.html',
    styleUrls:    [ 'public/themes/default/css/global.css' ],
    directives:   [ ROUTER_DIRECTIVES ]
})

export class AppComponent {
  constructor (private route: Router) {}
}
