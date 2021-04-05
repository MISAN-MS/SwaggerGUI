import {Component, OnInit, Input} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-validator-error-message',
    templateUrl: './validator-error-message.component.html',
    styleUrls: ['./validator-error-message.component.sass']
})
export class ValidatorErrorMessageComponent implements OnInit {

    @Input() errors;
    @Input() fieldName;

    public message: string;

    constructor(private translateService: TranslateService) {
    }

    ngOnInit(): void {
        if (this.errors.required) {
            this.message = this.translateService.instant(`validator.required`,
                    {fieldName: this.translateService.instant(this.fieldName)}
            );
        }
    }
}
