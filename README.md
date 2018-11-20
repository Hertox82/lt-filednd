# LtDragAndDrop

This component help you to generate a dropzone in order to make an upload file system.


in your component script, you have to import LtFile and create 2 function in order to pass at the LtFilDnd Component

```typescript

import { Component } from '@angular/core';
import { LtFile } from '../support/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  public arrayList: LtFile[] = [];


  fileToUpdate(files: LtFile[]) {
    console.log(files);
  }

  fileToDelete(file: LtFile) {
    const index = this.arrayList.indexOf(file);
    if ( index > -1) {
      this.arrayList.splice(index, 1);
    }
  }
}

```

LtFileDnD have two different EventEmitter:

[-] *uploadFile* that send event when one or more file are insert into the Dropzone
[-] *deletedFile* that send event when someone try to delete the file. 

```html
<h3>Drop File</h3>

<lt-filednd
[listOfFile]="arrayList"
(uploadFile)="fileToUpdate($event)"
(deletedFile)="fileToDelete($event)"
></lt-filednd>

```