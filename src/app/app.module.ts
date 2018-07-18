import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OuterCountainerComponent } from './outer-countainer/outer-countainer.component';

@NgModule({
  declarations: [
    AppComponent,
    OuterCountainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
