import { counterReducer } from "../counter files/state/counter.reducer";
import { CounterState } from "../counter files/state/counter.state";
import { postsReducer } from "../post/state/posts.reducer";
import { PostState } from "../post/state/posts.state";

export interface AppState {
    count: CounterState,
    posts: PostState
}

export const appReducer = {
    count: counterReducer,
    posts: postsReducer
}