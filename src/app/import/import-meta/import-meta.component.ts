import { Component } from '@angular/core';
import { ImportService } from '../../import.service';
import { alert } from 'devextreme/ui/dialog';

@Component({
    selector: 'app-import-meta',
    templateUrl: './import-meta.component.html',
    styleUrls: ['./import-meta.component.css']
})
export class ImportMetaComponent {
    constructor(private importService: ImportService) {}
    applyClick(t) {
        this.importService.importMetadata(t.value, 'advanced').then(null, () => {
            alert('It is unable to import this metadata.', 'ThemeBuilder');
        });
    }
}
