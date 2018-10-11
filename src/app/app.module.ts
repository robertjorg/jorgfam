import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OuterCountainerComponent } from './outer-countainer/outer-countainer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GoodreadsStatsComponent } from './goodreads-stats/goodreads-stats.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { routingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    OuterCountainerComponent,
    HomePageComponent,
    GoodreadsStatsComponent,
    BlogHomeComponent
  ],
  imports: [
    BrowserModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
