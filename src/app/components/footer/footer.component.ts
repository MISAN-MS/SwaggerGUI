import {Component, OnInit} from '@angular/core';
import * as brands from '@fortawesome/free-brands-svg-icons';
import * as solid from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
    public brands = brands;
    public solid = solid;

    constructor() {
    }

    ngOnInit(): void {
    }

}
