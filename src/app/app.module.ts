import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LtFiledndModule } from '../lt-filednd/lt-filednd.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LtFiledndModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
