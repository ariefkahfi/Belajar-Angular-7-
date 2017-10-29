import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {UnlessDirective} from "./custom-directives/MyDirective.directive";
import { TestComponent } from './test.component';

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
