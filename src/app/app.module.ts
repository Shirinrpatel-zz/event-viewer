import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/events.service';
import { ToastrService } from './common/toastr.service';

import { routes } from './routes';
import { EventDetailComponent } from './events/event-detail.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivatorService } from './events/event-route-activator.service';
import { EventListResolver } from './events/event-list-resolver.service';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './events/create-session.component';
import { SessionListComponent } from './events/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventDetailComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: canDeactivateCreateEvent
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function canDeactivateCreateEvent(createEventComponent: CreateEventComponent) {

  if (createEventComponent.isDirty) {
      return window.confirm('Are you sure you want to exit?');
  }
  return true;
}
