import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.sass']
})
export class NewComponent implements OnInit {
    public form: FormGroup;
    public technologies = [
        {
            name: 'Swagger',
            value: 'swagger',
            version: '2.0'
        },
        {
            name: 'OpenAPI',
            value: 'openapi',
            version: '3.0'
        }
    ];
    public submit = false;

    constructor(private formBuilder: FormBuilder,
                private dialogRef: MatDialogRef<NewComponent>) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            technology: new FormControl('', Validators.required),
            title: new FormControl('', [Validators.required, Validators.pattern(/[a-zA-Z]{2,}/)]),
            description: new FormControl(''),
            version  : new FormControl('', [Validators.required, Validators.pattern(/^([0-9]{1,3}\.[0-9]{1,3})(\.[0-9]{1,5})?/)])
        });
    }

    onCreate(): void {
        this.submit = true;
        if (this.form.valid) {
            this.dialogRef.close(this.form);
        }
    }
}
