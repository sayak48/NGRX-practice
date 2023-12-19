import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter files/counter/counter.component';
import { CounterInputComponent } from './counter files/counter-input/counter-input.component';
import { CounterOutputComponent } from './counter files/counter-output/counter-output.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter files/state/counter.reducer';
import { CounterCustomInputComponent } from './counter files/counter-custom-input/counter-custom-input.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeadersComponent } from './shared/components/headers/headers.component';
import { PostlistComponent } from './post/postlist/postlist.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterInputComponent,
    CounterOutputComponent,
    CounterCustomInputComponent,
    HomeComponent,
    HeadersComponent,
    PostlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
