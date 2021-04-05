import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewComponent} from '../../components/new/new.component';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {TranslateService} from '@ngx-translate/core';
import {filter} from 'rxjs/operators';

@Component({
    selector: 'app-gui',
    templateUrl: './gui.component.html',
    styleUrls: ['./gui.component.sass']
})
export class GuiComponent implements OnInit {

    private forceLeave: boolean;

    constructor(private dialog: MatDialog,
                private router: Router,
                private translateService: TranslateService) {
    }

    ngOnInit(): void {
        const newGui = this.dialog.open(NewComponent);
        newGui.disableClose = true;
        newGui.afterClosed().subscribe(data => {
            if (typeof data === 'boolean' && data === true) {
                this.forceLeave = data;
                this.router.navigate(['/']);
            } else {
                // ToDo create new project
                console.log(data);
            }
        });
    }

    public deactivate(): boolean | Promise<boolean> {
        if (typeof this.forceLeave === 'boolean') {
            return this.forceLeave;
        }
        return Swal.fire({
            title: this.translateService.instant('CONFIRM_DEACTIVATE.TITLE'),
            text: this.translateService.instant('CONFIRM_DEACTIVATE.TEXT'),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#414141',
            confirmButtonText: this.translateService.instant('CONFIRM_DEACTIVATE.CONFIRM'),
            cancelButtonText: this.translateService.instant('CONFIRM_DEACTIVATE.CANCEL'),
            allowOutsideClick: false,
            allowEscapeKey: false
        }).then(result => result.isConfirmed);
    }
}
