import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImportService } from 'src/app/import.service';

@Component({
  selector: 'app-bootstrap-uploader',
  templateUrl: './bootstrap-uploader.component.html',
  styleUrls: ['./bootstrap-uploader.component.css']
})
export class BootstrapUploaderComponent {
    @Input() accept: string;
    @Input() buttonText: string;
    @Input() version: number;
    @Output() imported = new EventEmitter();

    constructor(private importService: ImportService) {}

    uploaded(e) {
        const file = e.value[0];
        if(file) {
            let fileReader: FileReader;
            fileReader = new FileReader();
            fileReader.onload = () => {
                this.importService.importBootstrapVariables(fileReader.result, this.version, 'advanced');
                this.imported.emit();
                e.component.reset();
            };
            fileReader.readAsText(file);
        }
    }
}
