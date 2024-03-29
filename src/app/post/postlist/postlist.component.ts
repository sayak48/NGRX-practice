import { Component } from '@angular/core';
import { Post } from '../state/posts.state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPosts } from '../state/posts.selector';
import { deletepost } from '../state/posts.actions';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent {
  posts$: Observable<Post[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts)
  }

  onDeletePost(id: string) {
    if (confirm("Are you sure you want to delete the post")) {
      this.store.dispatch(deletepost({ id }));
    }
  }
}
