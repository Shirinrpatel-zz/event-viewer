import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from './shared/events.service';
import { ISession } from './shared/session.model';
import { IEvent } from './shared/event.model';

@Component({
    templateUrl: './event-detail.component.html',
    styles: [`
        .container { padding-left: 10px; padding-right: 10px; }
        .event-image { height: 100px; }
        a { cursor: pointer; text-decoration: none }
    `]
})
export class EventDetailComponent implements OnInit {

    event: IEvent;
    addMode: boolean;

    constructor(private eventService: EventService, private activeRoute: ActivatedRoute) {

    }

    ngOnInit() {
        const id = this.activeRoute.snapshot.params['id'];
        this.event = this.eventService.getEventDetails(id);
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