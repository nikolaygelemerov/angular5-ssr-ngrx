import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthenticationComponent} from './modules/auth/components/authentication/authentication.component';
import {MessageComponent} from './modules/message/components/message.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        component: AuthenticationComponent,
        loadChildren: './modules/auth/auth.module#AuthModule'
    },
    {
        path: 'message',
        component: MessageComponent,
        loadChildren: './modules/message/message.module#MessageModule'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
