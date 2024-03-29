import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'counter', loadChildren: () => import('./counter files/counter.module').then(m => m.CounterModule)
  },
  {
    path: 'posts', loadChildren: () => import('./post/post.module').then(m => m.PostsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
