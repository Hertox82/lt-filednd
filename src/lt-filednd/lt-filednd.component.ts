import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LtFile } from '../support/interface';


@Component({
  selector: 'lt-filednd',
  templateUrl: './lt-filednd.component.html',
  styleUrls: ['./lt-filednd.component.css']
})
export class LtFiledndComponent implements OnInit {

  dropzoneActive = false;

  @Input() public listOfFile: LtFile[];
  @Output() public  uploadFile: EventEmitter<LtFile[]> = new EventEmitter<LtFile[]>();
  @Output() public deletedFile: EventEmitter<LtFile> = new EventEmitter<LtFile>();

  dropzoneState($event: boolean) {
    this.dropzoneActive = $event;
  }

  handleDrop(fileList: FileList) {
      return Promise.all(
        [].map.call(fileList, (file) => {
          console.log(file);
          return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve({result: reader.result, file: file});
          };
          reader.readAsDataURL(file);
        });
      })).then((results) => {
        const listToUpdate: LtFile[] = [];
          results.forEach((obj: {result: string| ArrayBuffer, file: File}) => {
            let fileTU: LtFile = {
              img: '',
              name: obj.file.name,
              file: obj.file
            };
            if (obj.file.type === 'image/png' || obj.file.type === 'image/jpeg') {
            fileTU.img = obj.result;
            listToUpdate.push(fileTU);
            this.listOfFile.push(fileTU);
          }else if (obj.file.type === 'application/pdf') {
            fileTU.img =  'assets/433744_180206010530.png';
            listToUpdate.push(fileTU);
            this.listOfFile.push(fileTU);
          } else if (obj.file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            fileTU.img = 'assets/icons8-ms-excel-500.png';
            listToUpdate.push(fileTU);
            this.listOfFile.push(fileTU);
          } else {
            console.log(obj.file);
          }
          });
          this.uploadFile.emit(listToUpdate);
          return results;
        });
  }

  onFileSelected(event): void {
    event.preventDefault();
    this.handleDrop(event.target.files);
  }

  deleteFile(file: LtFile) {
    this.deletedFile.emit(file);
  }

  constructor() { }

  ngOnInit() {}

}
