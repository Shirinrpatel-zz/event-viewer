import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SessionListComponent } from './session-list.component';
import { DebugElement } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { VoterService } from './voter.service';
import { UpvoteComponent } from './upvote.component';
import { DurationPipe } from './shared/duration.pipe';
import { CollapsibleWellComponent } from '../common/collapsible-well.component';


describe('SessionListComponent', () => {
    let fixer: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugElement: DebugElement;

    beforeEach(async() => {
        let mockAuthService = {
            isAuthenticated: () => true,
            currentUser: {userName: 'Joe'}
        };
        let mockVoterService = {
            hasUserVoted: () => true
        };

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent,
                UpvoteComponent,
                DurationPipe,
                CollapsibleWellComponent
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ],
            schemas: []
        }).compileComponents();
    });

    beforeEach(() => {
        fixer = TestBed.createComponent(SessionListComponent);
        component = fixer.componentInstance;
        debugElement = fixer.debugElement;
        element = fixer.nativeElement;
    });

    describe('initial display', () => {

        it('should have the correct sessino title', () => {
            component.sessions = [{ id: 3, name: 'Session 1', presenter: 'Joe', duration: 1, 
                level: 'beginner', abstract: 'abstract', voters: ['john', 'bob'] }];
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 4;

            component.ngOnChanges();
            fixer.detectChanges();

            expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
        });
    });
});