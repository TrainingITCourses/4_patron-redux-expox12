import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GlobalStore, GlobalSlideTypes } from 'src/app/store/global-store.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {

  @Input() private counter; //--
  private count;

  constructor(private store: GlobalStore, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.observeCounter();
  }

  private observeCounter() {
    this.store.select$(GlobalSlideTypes.counter).subscribe(counter => {
      this.count = counter;
      this.cdr.detectChanges();

    });
  }

}
