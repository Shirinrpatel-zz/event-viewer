import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'upvote',
    templateUrl: './upvote.component.html',
    styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
    @Input() set voted(val) {
        this.inputColor = val ? 'red' : 'white';
    }
    @Input() count: number;
    @Output() vote = new EventEmitter();
    inputColor: string;

    onClick() {
        this.vote.emit({});
    }
}