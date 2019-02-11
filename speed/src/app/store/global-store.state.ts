import { Injectable } from '@angular/core';
import { globalinitialState, Global } from './models/global.model';
import { BehaviorSubject } from 'rxjs';
import { GlobalActions, GlobalActionTypes } from './global-store.actions';
import { globalStoreReducer } from './global-store.reducer';

@Injectable()
export class GlobalStore {
    private state: Global = { ...globalinitialState };
    private launches$ = new BehaviorSubject<any>(this.state.launches);
    private statuses$ = new BehaviorSubject<any>(this.state.statuses);
    private agencies$ = new BehaviorSubject<any>(this.state.agencies);
    private missions$ = new BehaviorSubject<any>(this.state.missions);
    private counter$ = new BehaviorSubject<number>(this.state.counter);
    private critType$ = new BehaviorSubject<any>(this.state.critType);
    private selectValue$ = new BehaviorSubject<number>(this.state.critType);
    private filter$ = new BehaviorSubject<any>(this.state.filter);

    constructor() {
    }

    public select$ = (slice: GlobalSlideTypes) => {
        switch(slice) {
            case GlobalSlideTypes.launches: 
                return this.launches$.asObservable();
            case GlobalSlideTypes.statuses:
                return this.statuses$.asObservable();
            case GlobalSlideTypes.agencies: 
                return this.agencies$.asObservable();
            case GlobalSlideTypes.missions:
                return this.missions$.asObservable();
            case GlobalSlideTypes.counter:
                return this.counter$.asObservable();
            case GlobalSlideTypes.critType:
                return this.critType$.asObservable();
            case GlobalSlideTypes.selectValue:
                return this.selectValue$.asObservable();
            case GlobalSlideTypes.filter:
                return this.filter$.asObservable();
        }
    }

    public selectSnapShot = (slice: GlobalSlideTypes) => {
        switch (slice) {
            case GlobalSlideTypes.launches:
                return [...this.state.launches];
            case GlobalSlideTypes.agencies:
                return [...this.state.agencies];
            case GlobalSlideTypes.statuses:
                return [...this.state.statuses];
            case GlobalSlideTypes.missions:
                return [...this.state.missions];
            case GlobalSlideTypes.counter:
                return this.state.counter;
            case GlobalSlideTypes.critType:
                return {...this.state.critType};
            case GlobalSlideTypes.selectValue:
                return this.state.selectValue;
            case GlobalSlideTypes.filter:
                return {...this.state.filter};
        }
    };

    public dispatch = (action: GlobalActions) => {
        this.state = globalStoreReducer(this.state, action);
        switch (action.type) {
            case GlobalActionTypes.LoadLaunches:
                this.launches$.next([...this.state.launches]);
                break;
            case GlobalActionTypes.LoadAgencies:
                this.agencies$.next([...this.state.agencies]);
                break;
            case GlobalActionTypes.LoadStatuses:
                this.statuses$.next([...this.state.statuses]);
                break;
            case GlobalActionTypes.LoadMissions:
                this.missions$.next([...this.state.missions]);
                break;
            case GlobalActionTypes.LoadCounter:
                this.counter$.next(this.state.counter);
                break;
            case GlobalActionTypes.LoadCritType:
                this.critType$.next({...this.state.critType});
                break;
            case GlobalActionTypes.LoadSelectValue:
                this.selectValue$.next(this.state.selectValue);
                break;
            case GlobalActionTypes.LoadFilter:
                this.filter$.next({...this.state.filter});
                break;
        }
    }

}

export enum GlobalSlideTypes {
    launches = 'launches',
    statuses = 'statuses',
    agencies = 'agencies',
    missions = 'missions',
    counter  = 'counter',
    critType = 'critType',
    selectValue = 'selectValue',
    filter = 'filter'
}