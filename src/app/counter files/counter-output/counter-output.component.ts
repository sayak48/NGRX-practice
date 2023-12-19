import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent {
  counterOutput: number;
  counterSubscription: Subscription
  //constructor(private store: Store<{ count: { counter: number } }>) { }
  constructor(private store: Store<{ count: CounterState }>) { }

  //setting the selector for making changes to another component 
  ngOnInit(): void {
    //this.counterSubscription = this.store.select('count').subscribe(data => { this.counterOutput = data.counter })
    this.counterSubscription = this.store.select(getCounter).subscribe(data => { this.counterOutput = data })
  }
  ngOnDestroy(): void {
    if (this.counterSubscription)
      this.counterSubscription.unsubscribe();
  }

  /**
   * Alternate implementation would be to 
   * 
   * count$ : Observable<CounterState>;
   * 
   * ngOnInit(){
   *  this.count$ = this.store.select('count');
   * }
   * 
   * Inside Template file, subscribe using the async pipe.
   *  {{(counter$ | async).counter}}
   *
   */
}
