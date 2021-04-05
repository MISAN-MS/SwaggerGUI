import {Injectable} from '@angular/core';
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {GuiComponent} from '../pages/gui/gui.component';

@Injectable({
    providedIn: 'root'
})
export class StayOnPageGuard implements CanDeactivate<GuiComponent> {
    canDeactivate(
        component: GuiComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ): boolean {
        // @ts-ignore
        return component.deactivate ? component.deactivate() : true;
    }
}
