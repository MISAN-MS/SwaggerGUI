import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-page-part',
    templateUrl: './page-part.component.html',
    styleUrls: ['./page-part.component.sass']
})
export class PagePartComponent implements OnInit {
    @Input() content?: string;

    constructor() {
    }

    ngOnInit(): void {
    }

}
