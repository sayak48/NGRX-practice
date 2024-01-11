import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../state/posts.state';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { addpost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  postForm: FormGroup;

  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(7)]),
      description: new FormControl(null, [Validators.required, Validators.maxLength(100), Validators.minLength(10)])
    })


  }
  addPost() {
    if (!this.postForm.valid)
      return;

    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }

    this.store.dispatch(addpost({ post }))
  }

  showDescriptionErrors(): any {
    const descriptionForm = this.postForm.get('description');

    if (descriptionForm.touched && !descriptionForm.valid) {
      if (descriptionForm.errors['required']) return "Description is required"
      if (descriptionForm.errors['minlength']) return "Description must have more than 10 characters"
      if (descriptionForm.errors['maxlength']) return "Description must not have more than 100 characters"
    }

  }
}
