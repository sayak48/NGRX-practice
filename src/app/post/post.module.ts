import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { PostlistComponent } from "./postlist/postlist.component";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { postsReducer } from "./state/posts.reducer";


const routes: Routes = [
    {
        path: '', component: PostlistComponent,
        children: [
            { path: "add", component: AddPostComponent },
            { path: "edit/:id", component: EditPostComponent }
        ]
    }
]
@NgModule({
    declarations: [
        PostlistComponent,
        AddPostComponent,
        EditPostComponent],
    imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, StoreModule.forFeature('posts', postsReducer)]
})

export class PostsModule {

}