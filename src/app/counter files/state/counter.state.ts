//this is the store file 
export interface CounterState {
    counter: number,
    appName: string
}
//here const because an object is passed by reference and thus can be changed
export const initialState: CounterState = {
    counter: 0,
    appName: 'Ngrx Practice'
}