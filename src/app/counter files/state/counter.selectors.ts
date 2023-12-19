import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const getCounterSelector = createFeatureSelector<CounterState>('count');

export const getCounter = createSelector(getCounterSelector, state => {
    return state.counter
})

export const getAppName = createSelector(getCounterSelector, state => {
    return state.appName
})