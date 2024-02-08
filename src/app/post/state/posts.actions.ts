import { createAction, props } from "@ngrx/store";
import { Post } from "./posts.state";

export const ADD_POST_ACTION = '[post page] add post';
export const UPDATE_POST_ACTION = '[post page] update post';
export const DELETE_POST_ACTION = '[post page] delete post';


//sending props aswell in order to use the value for updating the state
export const addpost = createAction(ADD_POST_ACTION, props<{ post: Post }>());
export const editpost = createAction(UPDATE_POST_ACTION, props<{ post: Post }>());
export const deletepost = createAction(DELETE_POST_ACTION, props<{ id: string }>());