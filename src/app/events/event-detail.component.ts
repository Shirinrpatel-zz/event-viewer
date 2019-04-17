import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { EventService } from './shared/events.service';
import { ISession } from './shared/session.model';
import { IEvent } from './shared/event.model';

@Component({
    templateUrl: './event-detail.component.html',
    styles: [`
        .container { padding-left: 10px; padding-right: 10px; }
        .event-image { height: 100px; }
        a { cursor: pointer; text-decoration: none; }
        .margin-bottom-10 { margin-bottom: 10px; }
    `]
})
export class EventDetailComponent implements OnInit {

    event: IEvent;
    addMode: boolean;
    filterBy: string = 'all';
    sortBy: string = 'votes';

    constructor(private eventService: EventService, private activeRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.activeRoute.params.forEach((params: Params) => {
            this.event = this.eventService.getEventDetails(+params['id']);
            this.addMode = false;
        });
    }

    addSession() {
        this.addMode = true;
    }

    onNewSessionCreation(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    onCancelSessionCreation() {
        this.addMode = false;
    }
}