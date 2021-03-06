import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpperDirective } from './upper.directive';
import { MyvisibilityDirective } from './myvisibility.directive';
import { MycolorDirective } from './mycolor.directive';
import { UnorderedlistComponent } from './unorderedlist.component';


@NgModule({
  declarations: [
    AppComponent,
    UpperDirective,
    MyvisibilityDirective,
    MycolorDirective,
    UnorderedlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
