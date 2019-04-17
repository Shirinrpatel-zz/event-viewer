import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../events/shared/session.model';
import { EventService } from '../events/shared/events.service';


@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px; }
        #searchForm { margin-right: 100px; }
        li > a.active { color: #F97924; }
    `]
})
export class NavBarComponent {

    searchTerm: string;
    filteredSession: ISession[];

    constructor(private authService: AuthService, private eventService: EventService) {
    }

    searchSessions() {  
        this.eventService.searchSessions(this.searchTerm)
            .subscribe(sessions => {
                this.filteredSession = sessions;
                console.log(this.filteredSession);
        });        
    }
}