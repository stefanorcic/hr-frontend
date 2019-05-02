import { Candidate } from './candidate';
import { Skill } from './skill';

export class ResponseCandidateSkill {
    id: number;
    candidate: Candidate;
    skills: Skill[];
}