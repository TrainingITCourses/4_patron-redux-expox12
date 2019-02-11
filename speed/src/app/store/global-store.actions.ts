import { Launch, Agency, Mission, Status } from './models/index';

export enum GlobalActionTypes {
    LoadLaunches = '[Global] LoadLaunches',
    LoadAgencies = '[Global] LoadAgencies',
    LoadStatuses = '[Global] LoadStatuses',
    LoadMissions = '[Global] LoadMissions',
    LoadCounter  = '[Global] LoadCounter',
    LoadCritType = '[Global] LoadCritType',
    LoadSelectValue = '[Global] LoadSelectValue',
    LoadFilter = '[Global] LoadFilter'
  }
  
  export interface Action {
    readonly type: GlobalActionTypes;
    readonly payload: any;
  }

  
  export class LoadLaunches implements Action {
    public readonly type = GlobalActionTypes.LoadLaunches;
    constructor(public readonly payload: Launch[]) {}
  }

  export class LoadAgencies implements Action {
    public readonly type = GlobalActionTypes.LoadAgencies;
    constructor(public readonly payload: Agency[]) {}
  }
  
  export class LoadStatuses implements Action {
    public readonly type = GlobalActionTypes.LoadStatuses;
    constructor(public readonly payload: Status[]) {}
  }

  export class LoadMissions implements Action {
    public readonly type = GlobalActionTypes.LoadMissions;
    constructor(public readonly payload: Mission[]) {}
  }
  export class LoadCounter implements Action {
    public readonly type = GlobalActionTypes.LoadCounter;
    constructor(public readonly payload: number) {}
  }

  export class LoadCritType implements Action {
    public readonly type = GlobalActionTypes.LoadCritType;
    constructor(public readonly payload: any) {}
  }

  export class LoadSelectValue implements Action {
    public readonly type = GlobalActionTypes.LoadSelectValue;
    constructor(public readonly payload: number) {}
  }

  export class LoadFilter implements Action {
    public readonly type = GlobalActionTypes.LoadFilter;
    constructor(public readonly payload: any) {}
  }

  
  export type GlobalActions = LoadLaunches | LoadAgencies | LoadStatuses | LoadMissions | LoadCounter | LoadCritType | LoadSelectValue | LoadFilter;
  