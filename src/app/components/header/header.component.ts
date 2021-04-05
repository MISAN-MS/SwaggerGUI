import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
    @ViewChild('switcher') switcher: ElementRef;
    @ViewChild('languageMenu') languageMenu: ElementRef;

    public selectedLanguage: string;
    public languages = ['pl', 'en'];
    public isOpenLanguages = false;

    constructor(private translateService: TranslateService,
                private renderer: Renderer2,
                private cookie: CookieService) {
        this.renderer.listen('window', 'click', (event: Event) => {
            const target = this.getSwitchElement(event.target);
            if (target !== this.switcher.nativeElement && target !== this.languageMenu.nativeElement) {
                this.isOpenLanguages = false;
            }
        });
        this.selectedLanguage = this.translateService.defaultLang;
    }

    ngOnInit(): void {
    }

    public switchLanguage(): void {
        this.isOpenLanguages = !this.isOpenLanguages;
    }

    public changeLanguage(language: string): void | null {
        if (!this.languages.includes(language)) {
            return null;
        }
        this.selectedLanguage = language;
        this.isOpenLanguages = false;
        this.translateService.use(this.selectedLanguage);
        this.cookie.set('language', language, 31);
    }

    private getSwitchElement(element: any): Element {
        if (element.tagName === 'path') {
            element = element.parentNode;
        }
        if (element.tagName === 'svg' && (element.classList.contains('fa-chevron-down') || element.classList.contains('fa-chevron-up'))) {
            return document.querySelector('#language-switcher');
        }
        while (element.id !== 'language-switcher' && element.tagName !== 'app-root' && element.tagName !== 'HTML') {
            element = element.parentNode;
        }
        return element;
    }
}
