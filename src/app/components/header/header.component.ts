import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons';
import {TranslateService} from '@ngx-translate/core';
import {Target} from '@angular/compiler';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
    @ViewChild('switcher') switcher: ElementRef;
    @ViewChild('languageMenu') languageMenu: ElementRef;

    public icons = icons;
    public selectedLanguage = {
        name: '',
        code: ''
    };
    public languages = [
        {
            name: 'pl',
            code: 'pl'
        },
        {
            name: 'en',
            code: 'gb'
        }
    ];
    public isOpenLanguages = false;

    constructor(private translateService: TranslateService,
                private renderer: Renderer2) {
        this.renderer.listen('window', 'click', (event: Event) => {
            const target = this.getSwitchElement(event.target);
            if (target !== this.switcher.nativeElement && target !== this.languageMenu.nativeElement) {
                this.isOpenLanguages = false;
            }
        });
        this.selectedLanguage = this.languages[0];
    }

    ngOnInit(): void {
    }

    public switchLanguage(): void {
        this.isOpenLanguages = !this.isOpenLanguages;
    }

    public changeLanguage(index: number): void {
        this.selectedLanguage = this.languages[index];
        this.isOpenLanguages = false;
        this.translateService.use(this.selectedLanguage.code);
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
