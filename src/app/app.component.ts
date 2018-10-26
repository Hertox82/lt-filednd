import { Component } from '@angular/core';
import { LtFile } from '../support/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public lista: LtFile[] = [];


  fileToUpdate(files: LtFile[]) {
    console.log(files);
  }

  fileToDelete(file: LtFile) {
    const index = this.lista.indexOf(file);
    if ( index > -1) {
      this.lista.splice(index, 1);
  }
}
