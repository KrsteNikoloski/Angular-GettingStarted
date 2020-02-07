import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConvertStringToPipe } from './pipes/convert-string-to.pipe';
import { StarComponent } from './components/star/star.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ConvertStringToPipe,
        StarComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        ConvertStringToPipe,
        StarComponent
    ],
})
export class SharedModule { }
