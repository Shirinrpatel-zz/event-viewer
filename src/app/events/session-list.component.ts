import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from './shared/session.model';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    availableSessions: ISession[];

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.availableSessions.sort(sortByName) : this.availableSessions.sort(sortByVotes);
        }
    }

    filterSessions(filter: string) {
        if (filter === 'all') {
            this.availableSessions = this.sessions.slice(0);
        }else {
           this.availableSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
           });
        }
    }
}

function sortByName(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) return 1;
    else if (s1.name === s2.name) return 1;
    else return -1;
}

function sortByVotes(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}