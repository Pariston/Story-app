import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchPageService } from './searchPage.service';

@Component({
    templateUrl: 'public/themes/default/html/searchPage.html',
    styleUrls: [ 'public/themes/default/css/global.css' ],
    providers: [ SearchPageService ]
})

export class SearchPageComponent implements OnInit {
    phrase: any;

    constructor(
        private route: ActivatedRoute,
        private service: SearchPageService
    ) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            let phrase = params['phrase'];
            this.phrase = phrase;
            this.service.searchFor(phrase);
        }
        )
    }
}