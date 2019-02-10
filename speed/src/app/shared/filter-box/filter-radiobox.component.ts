import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-radiobox',
  templateUrl: './filter-radiobox.component.html',
  styleUrls: ['./filter-radiobox.component.css']
})
export class FilterRadioBoxComponent implements OnInit {

  @Output() private critValue = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  private onChangeCriterion(value) {
    this.critValue.next(value);
  }

}
