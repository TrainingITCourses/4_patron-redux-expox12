import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Status } from './models/status';
import { HttpClient } from '@angular/common/http';
import { Agency } from './models/agency';
import { Mission } from './models/mission';
import { Launch } from './models/launch';

@Injectable()
export class ApiService {

    private baseUrl : String = '/assets/data/';

    constructor(private httpClient: HttpClient) {}

    getLaunchStatus(): Observable<Status[]> {
        return this.httpClient.get<Status[]>(this.baseUrl + 'launchstatus.json')
        .pipe(map((res: any) => res.types));
    }

    getAgencies(): Observable<Agency[]> {
        return this.httpClient.get<Status[]>(this.baseUrl + 'agencies.json')
        .pipe(map((res: any) => res.agencies));
    }

    getMissions(): Observable<Mission[]> {
        return this.httpClient.get<Status[]>(this.baseUrl + 'missiontypes.json')
        .pipe(map((res: any) => res.types));
    }

    // type, value
    getLaunches(filter: any) {
        switch (filter.type) {
            case "status": {
                return this.httpClient.get(this.baseUrl + 'launches.json')
                    .pipe(map((res: any): Launch[] => res.launches.filter(launch =>launch.status === filter.value )));
            }
            case "agency": {
                return this.httpClient.get(this.baseUrl + 'launches.json')
                    .pipe(
                        
                        map((res: any): Launch[] =>
                            res['launches'].filter((launch: Launch) =>
                                launch['missions'].some( mission =>
                                    mission.agencies &&
                                    mission['agencies'].some( agency => agency.id === filter.value)
                                )
                            )
                            ||
                            res['launches'].filter((launch: Launch) =>
                                launch.location.pads.some( pad =>
                                    pad.agencies &&
                                    pad.agencies.some( agency => agency.id === filter.value )
                                )
                            )
                            ||
                            res['launches'].filter((launch: Launch) =>
                                launch.rocket.agencies &&
                                launch.rocket.agencies.some( agency =>
                                    agency.id === filter.value)
                            )
                        ),
                    );
            }
            case "mission": {
                return this.httpClient.get(this.baseUrl + 'launches.json')
                    .pipe(map( (res: any): Launch[] =>
                            res['launches'].filter( (launch: Launch) => launch.missions.find(mission => mission.type === filter.value) )
                        ),
                        tap (res => res)
                    );
            }
            default: {
                break;
            }
        }
    }


    /*
    getLaunchStatus(): Observable<Status[]> {
       this.httpClient.get<Status[]>(this.baseUrl + 'launchstatus.json').subscribe((data: any) => {
           return data.types;
       });
    }*/
}