import { Component, OnInit } from '@angular/core';
import { ApiService } from '../store/api.service';
import { Launch } from '../store/models/launch';
import { GlobalStore, GlobalSlideTypes } from '../store/global-store.state';
import { LoadCounter, LoadLaunches } from '../store/global-store.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private launches: Launch[]; //--
  private counter: number = 0; //--

  constructor(private apiService: ApiService, private store: GlobalStore) { }

  ngOnInit() {
    this.observeFilter();
  }  

  private observeFilter() {
    this.store.select$(GlobalSlideTypes.filter).subscribe(filter => {
      this.onSelectFilter(filter);
    });
  }

  onSelectFilter(filter) {
    if(!filter.value) return;
    this.apiService.getLaunches(filter).subscribe(res => {
      this.store.dispatch(new LoadLaunches(res));
      this.store.dispatch(new LoadCounter(res.length));

    }, error => {
      console.error("error");
    });

    
  }

}
