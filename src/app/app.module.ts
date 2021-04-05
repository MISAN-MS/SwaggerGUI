import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './pages/home/home.component';
import {FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FooterComponent} from './components/footer/footer.component';
import {PagePartComponent} from './components/page-part/page-part.component';
import {AboutComponent} from './pages/about/about.component';
import {GuiComponent} from './pages/gui/gui.component';
import {NewComponent} from './components/new/new.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {ValidatorErrorMessageComponent} from './components/validator-error-message/validator-error-message.component';
import {CookieComponent} from './components/cookie/cookie.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        PagePartComponent,
        AboutComponent,
        GuiComponent,
        NewComponent,
        ValidatorErrorMessageComponent,
        CookieComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        BrowserAnimationsModule,
        MatDialogModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private library: FaIconLibrary) {
        library.addIconPacks(fas);
        library.addIconPacks(far);
        library.addIconPacks(fab);
    }
}
