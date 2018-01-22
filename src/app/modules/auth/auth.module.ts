import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {SignInComponent} from './components/sign-in/sign-in.component';
import {AUTHROUTING} from './auth.routing';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AUTHROUTING
    ],
    declarations: [
        SignInComponent
    ],
    providers: []
})
export class AuthModule {}
