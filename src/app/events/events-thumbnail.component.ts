import { Component, Input } from '@angular/core';
import { IEvent } from './shared/event.model';


@Component({
    selector: 'event-thumbnail',
    templateUrl: './events-thumbnail.component.html',
    styles: [`
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
        .thumbnail { min-height: 200px; }
        .green { color: #003300 !important }
        .bold { font-weight: bold; }
    `]
})
export class EventsThumbnailComponent {
    @Input() event: IEvent;

    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00 am'
        return { green: isEarlyStart, bold: isEarlyStart };
    }
}