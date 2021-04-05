import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
    selector: 'app-cookie',
    templateUrl: './cookie.component.html',
    styleUrls: ['./cookie.component.sass']
})
export class CookieComponent implements OnInit {

    public accepted: boolean;

    constructor(private cookie: CookieService) {
    }

    ngOnInit(): void {
        this.accepted = this.cookie.get('accepted') && this.cookie.get('accepted') === 'true';
    }

    public accept(): void {
        this.cookie.set('accepted', 'true', 31);
        this.accepted = true;
    }
}
