import { createReducer, on } from "@ngrx/store"
import { initialState } from "./posts.state"
import { addpost, editpost } from "./posts.actions";

const _postsReducer = createReducer(initialState,
    on(addpost, (state, action) => {
        let post = { ...action.post };
        post.id = (state.posts.length + 1).toString()
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(editpost, (state, action) => {

        const updatedPost = state.posts.map(post => {
            //using map to modify the post array in state. Using return is a functionality of the map. can also be achieved using if else statement and asigning the new values
            return action.post.id === post.id ? action.post : post
        })

        return {
            ...state,
            posts: updatedPost
        }
    })
);

export function postsReducer(state, action) {
    return _postsReducer(state, action)
}