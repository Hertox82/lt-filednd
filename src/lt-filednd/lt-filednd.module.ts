import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileDropDirective } from './file-drop.directive';
import { LtFiledndComponent } from './lt-filednd.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [FileDropDirective, LtFiledndComponent],
  exports: [LtFiledndComponent]
})
export class LtFiledndModule { }
