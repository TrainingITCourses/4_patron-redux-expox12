import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GlobalStore } from 'src/app/store/global-store.state';
import { LoadCritType } from 'src/app/store/global-store.actions';

@Component({
  selector: 'app-filter-radiobox',
  templateUrl: './filter-radiobox.component.html',
  styleUrls: ['./filter-radiobox.component.css']
})
export class FilterRadioBoxComponent implements OnInit {

  @Output() private critValue = new EventEmitter(); //--

  constructor(private store: GlobalStore) { }

  ngOnInit() {
  }

  private onChangeCriterion(value) {
    this.store.dispatch(new LoadCritType(value));
    //this.critValue.next(value);
  }

}
