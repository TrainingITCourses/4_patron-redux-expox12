import { Component, OnInit } from '@angular/core';
import { ApiService } from '../store/api.service';
import { Launch } from '../store/models/launch';
import { GlobalStore, GlobalSlideTypes } from '../store/global-store.state';
import { LoadLaunches, LoadCounter } from '../store/global-store.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private launches: Launch[];
  private counter: number = 0;

  constructor(private apiService: ApiService, private store: GlobalStore) { }

  ngOnInit() {
    //this.apiService.getLaunches_();
    this.observeLaunches();
    this.observeCounter();
    this.apiService.getAllLaunches().subscribe(launches => this.store.dispatch(new LoadLaunches(launches)));
  }

  private observeLaunches() {
    this.store.select$(GlobalSlideTypes.launches).subscribe(launches => {
      this.launches = [ ...launches ];
      this.store.dispatch(new LoadCounter(this.launches.length));
      console.log(launches);
    });
  }

  private observeCounter() {
    this.store.select$(GlobalSlideTypes.counter).subscribe(counter => {
      console.log(counter);
      this.counter = counter;
    });
  }

  onSelectFilter(filter) {
    if(filter.value == 0) return;
    /*
    this.apiService.getLaunches(filter).subscribe(res => {
      this.launches = Object.assign([], res);
      console.log(this.launches);
      this.counter = this.launches.length;

    }, error => {
      console.error("error");
    });*/

    
  }

}
