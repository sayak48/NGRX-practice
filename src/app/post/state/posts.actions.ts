import { createAction, props } from "@ngrx/store";
import { Post } from "./posts.state";

export const addpost = createAction('addpost', props<{ post: Post }>());