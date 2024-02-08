import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/posts.selector';
import { Post } from '../state/posts.state';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { editpost } from '../state/posts.actions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {

  post: Post;
  postForm: FormGroup;
  postSubscription: Subscription
  constructor(private route: ActivatedRoute, private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    //to get the data, first we need to get the id
    this.route.paramMap.subscribe(params => {
      const id = params.get('id')

      //then we need to get the subsequent data from the state using selectors.
      this.postSubscription = this.store.select(getPostById, { id }).subscribe(data => {
        this.post = data;
        console.log(this.post)
        this.createForm()
      })
    })

  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [Validators.required, Validators.minLength(7)]),
      description: new FormControl(this.post.description, [Validators.required, Validators.maxLength(100), Validators.minLength(10)])
    })
  }

  onPostFormUpdate() {
    if (!this.postForm.valid) {
      //if not valid end
      return;
    }

    //updated values
    const title = this.postForm.value.title;
    const description = this.postForm.value.description;

    //form the post to be updated as effect of update action
    const post: Post = {
      id: this.post.id,
      title,
      description
    }
    //dispatch the action

    this.store.dispatch(editpost({ post }));
    this.router.navigate(['posts'])
  }

  ngOnDestroy() {
    if (this.postSubscription)
      this.postSubscription.unsubscribe();
  }
}
