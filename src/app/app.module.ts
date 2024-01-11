import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter files/counter/counter.component';
import { CounterInputComponent } from './counter files/counter-input/counter-input.component';
import { CounterOutputComponent } from './counter files/counter-output/counter-output.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter files/state/counter.reducer';
import { CounterCustomInputComponent } from './counter files/counter-custom-input/counter-custom-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeadersComponent } from './shared/components/headers/headers.component';
import { PostlistComponent } from './post/postlist/postlist.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/app.state';
import { AddPostComponent } from './post/add-post/add-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterInputComponent,
    CounterOutputComponent,
    CounterCustomInputComponent,
    HomeComponent,
    HeadersComponent,
    PostlistComponent,
    AddPostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducer),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      logOnly: !isDevMode(), // Restrict extension to log-only mode      
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
