import { Launch, Agency, Mission, Status } from './index';

export interface Global {
    launches: Launch[];
    agencies: Agency[];
    missions: Mission[];
    statuses: Status[];
    counter : number;
}

export const globalinitialState: any = {
    launches: [],
    agencies: [],
    missions: [],
    statuses: [],
    counter : 0
}