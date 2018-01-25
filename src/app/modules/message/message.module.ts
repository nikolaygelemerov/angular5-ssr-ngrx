import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {MessageRouting} from './message.routing';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MessageRouting
    ],
    declarations: [],
    providers: []
})

export class MessageModule {}
