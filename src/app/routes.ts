import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailComponent } from './events/event-detail.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivatorService } from './events/event-route-activator.service';
import { EventListResolver } from './events/event-list-resolver.service';
import { CreateSessionComponent } from './events/create-session.component';

export const routes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivatorService] },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule' },
];