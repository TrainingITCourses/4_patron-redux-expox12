import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GlobalStore } from 'src/app/store/global-store.state';
import { LoadSelectValue } from 'src/app/store/global-store.actions';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterSelectComponent implements OnInit {

  @Input() public criterionValues: any[];
  @Output() private changeFilterValue = new EventEmitter(); //--

  constructor(private store: GlobalStore) { }

  ngOnInit() {
  }

  private selectFilterValue( filterValue ) {
    const valueId = parseInt(filterValue, 10);
    //this.changeFilterValue.next(valueId);
    this.store.dispatch(new LoadSelectValue(valueId));
  }

}
