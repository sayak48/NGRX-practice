import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from '../state/counter.state';
import { changeAppName, customInput } from '../state/counter.actions';
import { getAppName } from '../state/counter.selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-custom-input',
  templateUrl: './counter-custom-input.component.html',
  styleUrls: ['./counter-custom-input.component.css']
})
export class CounterCustomInputComponent {

  value: number;
  appName$: Observable<string>;

  //before app state
  //constructor(private store: Store<{ count: CounterState }>) { }

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.appName$ = this.store.select(getAppName);
  }
  onAdd() {

    //+this.value is to convert the string value to a number value
    this.store.dispatch(customInput({ value: +this.value }));
    this.value = null;
  }

  onChangeAppName() {
    this.store.dispatch(changeAppName())
  }


  /*
//-> implementation without selector however never do such implementation

  value: number;
  appName$: Observable<any>

  constructor(private store: Store<{ count: CounterState }>) { }

  ngOnInit() {
    this.appName$ = this.store.select('count');


  }
  onAdd() {

    //+this.value is to convert the string value to a number value
    this.store.dispatch(customInput({ value: +this.value }));
    this.value = null;
  }

  onChangeAppName() {
    this.store.dispatch(changeAppName())
  }
  */
}
