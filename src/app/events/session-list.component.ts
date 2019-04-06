import { Component, Input } from '@angular/core';
import { ISession } from './shared/session.model';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent {
    @Input() sessions: ISession[];
}