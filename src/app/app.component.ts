import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    constructor(private translateService: TranslateService,
                private cookie: CookieService) {
        this.translateService.setDefaultLang(this.cookie.check('language') ? this.cookie.get('language') : navigator.language.substr(0, 2));
    }
}
