import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[fileDrop]'
})
export class FileDropDirective {

  @Output() filesDropped = new EventEmitter<FileList>();
  @Output() filesHovered = new EventEmitter<boolean>();

  constructor() { }

  @HostListener('drop', ['$event'])
  onDrop(event: any): void {
    event.preventDefault();
    const transfer = event.dataTransfer;
    this.filesDropped.emit(transfer.files);
    this.filesHovered.emit(false);
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: any): void {
    event.preventDefault();

    this.filesHovered.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: any): void {
    this.filesHovered.emit(false);
  }

}
