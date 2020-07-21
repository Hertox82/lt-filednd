import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileDropDirective } from './file-drop.directive';
import { LtFiledndComponent } from './lt-filednd.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
  ],
  declarations: [FileDropDirective, LtFiledndComponent],
  exports: [LtFiledndComponent]
})
export class LtFiledndModule { }
