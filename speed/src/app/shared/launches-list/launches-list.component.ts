import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Launch } from 'src/app/store/models/launch';
import { GlobalStore, GlobalSlideTypes } from 'src/app/store/global-store.state';

@Component({
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchesListComponent implements OnInit {

  @Input() private launchList: Launch[]; //--
  private launchesList: Launch[];

  constructor(private store: GlobalStore, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.observeLaunches();
  }

  private observeLaunches() {
    this.store.select$(GlobalSlideTypes.launches).subscribe(launches => {
      this.launchesList = launches;
      this.cdr.detectChanges();
    })
  }

}
