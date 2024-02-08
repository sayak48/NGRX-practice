import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter files/state/counter.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeadersComponent } from './shared/components/headers/headers.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/app.state';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //StoreModule.forRoot(appReducer),
    StoreModule.forRoot({}),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      logOnly: !isDevMode(), // Restrict extension to log-only mode      
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
