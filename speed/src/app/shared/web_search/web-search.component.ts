import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/store/api.service';
import { GlobalStore, GlobalSlideTypes } from 'src/app/store/global-store.state';
import { LoadStatuses, LoadAgencies, LoadMissions, LoadFilter } from 'src/app/store/global-store.actions';

@Component({
  selector: 'app-web-search',
  templateUrl: './web-search.component.html',
  styleUrls: ['./web-search.component.css']
})
export class WebSearchComponent implements OnInit {

  private resultCrit: any;
  private filterValues: any[];

  @Output() private filterForLaunches = new EventEmitter();

  constructor(private apiService: ApiService, private store: GlobalStore) { }

  ngOnInit() {
    this.observeCritType();
    this.observeSelectValue();
  }

  private observeSelectValue() {
    this.store.select$(GlobalSlideTypes.selectValue).subscribe(el => {
      const critType = this.store.selectSnapShot(GlobalSlideTypes.critType);
      this.store.dispatch(new LoadFilter({ type: critType.value, value: el }));
    });
  }

  private observeCritType() {
    this.store.select$(GlobalSlideTypes.critType).subscribe(type => {
      this.loadData(type);
    });
  }

  private loadData(criterionType: any) {
    this.resultCrit = criterionType;

    switch (this.resultCrit.value) {
      case 'status':
        this.apiService.getLaunchStatus().subscribe(data => {
          this.filterValues = data;
        });
        break;
      case 'agency':
        this.apiService.getAgencies().subscribe(data => {
          this.filterValues = data;
        });
        break;
      case 'mission':
        this.apiService.getMissions().subscribe(data => {
          this.filterValues = data;
        });
        break;
      default:
    }
    this.filterValues = Object.assign([], this.filterValues);
  }

  onCritValueChange = (criterionType: any) => {
    this.resultCrit = criterionType;

    switch (this.resultCrit.value) {
      case 'status':
        this.apiService.getLaunchStatus().subscribe(data => {
          this.store.dispatch(new LoadStatuses(data))
        });
        break;
      case 'agency':
        this.apiService.getAgencies().subscribe(data => {
          this.store.dispatch(new LoadAgencies(data))
        });
        break;
      case 'mission':
        this.apiService.getMissions().subscribe(data => {
          this.store.dispatch(new LoadMissions(data))
        });
        break;
      default:
    }
  }


}
