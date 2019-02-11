import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GlobalStore, GlobalSlideTypes } from 'src/app/store/global-store.state';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterSelectComponent implements OnInit {

  public criterionValues: any[];
  @Output() private changeFilterValue = new EventEmitter();

  constructor(private store: GlobalStore, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.observeCriterionResult();
  }

  private observeCriterionResult() {
    this.store.select$(GlobalSlideTypes.agencies).subscribe(agencies => {
      this.criterionValues = agencies;
      this.cdr.detectChanges();
    });
    this.store.select$(GlobalSlideTypes.statuses).subscribe(statuses => {
      this.criterionValues = statuses;
      this.cdr.detectChanges();
    });
    this.store.select$(GlobalSlideTypes.missions).subscribe(missions => {
      this.criterionValues = missions;
      this.cdr.detectChanges();
    });
    
  }

  private selectFilterValue( filterValue ) {
    const valueId = parseInt(filterValue, 10);
    this.changeFilterValue.next(valueId);
  }

}
