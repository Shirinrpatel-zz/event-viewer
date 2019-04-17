import { Injectable } from '@angular/core';
import { ISession } from './shared/session.model';


@Injectable()
export class VoterService {
    
    deleteVoter(session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => voter === voterName);
    }

    addVoter(session: ISession, voterName: string) {
        session.voters.push(voterName);
    }

    hasUserVoted(session: ISession, voterName: string) {
        return session.voters.some(voter => voter === voterName);
    }
}