import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListCardComponent } from './list-card/list-card.component';
import { CardComponent } from './list-card/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCardComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
