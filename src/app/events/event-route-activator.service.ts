import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventService } from './shared/events.service';


@Injectable()
export class EventRouteActivatorService implements CanActivate {

    constructor(private eventService: EventService, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {

        const eventExists = !!this.eventService.getEventDetails(+route.params['id']);

        if (!eventExists) {
            this.router.navigate(['/404']);
        }

        return eventExists;
    }
}