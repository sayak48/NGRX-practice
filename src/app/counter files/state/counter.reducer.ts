import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, customInput, changeAppName } from './counter.actions';
import { initialState } from './counter.state';

export const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
        return {
            ...state, // for immutability of the state at first level
            counter: state.counter + 1, //change the initialstate.counter value  
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1,
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0,
        }
    }),
    on(customInput, (state, action) => {
        return {
            ...state,
            counter: state.counter + action.value,
        }
    }),
    on(changeAppName, (state) => {
        return {
            ...state,
            appName: "Ngrx app name modified",
        }
    })

);

// this is to provide an extra layer of abstraction over the main method
export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}
