import { GlobalActions, GlobalActionTypes } from './global-store.actions';
import { globalinitialState, Global } from './models/global.model';


export function globalStoreReducer( state = globalinitialState, action: GlobalActions ): Global {
    const result = { ...state };
    switch (action.type) {
        case GlobalActionTypes.LoadLaunches:
            result.launches = action.payload;
            break;
        case GlobalActionTypes.LoadAgencies:
            result.agencies = action.payload;
            break;
        case GlobalActionTypes.LoadStatuses:
            result.statuses = action.payload;
            break;
        case GlobalActionTypes.LoadMissions:
            result.missions = action.payload;
            break;
        case GlobalActionTypes.LoadMissions:
            result.missions = action.payload;
            break;
        case GlobalActionTypes.LoadCounter:
            result.counter = action.payload;
            break;
    }
    return result;
}
