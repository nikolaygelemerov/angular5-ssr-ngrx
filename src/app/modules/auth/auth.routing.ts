import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';


const AUTH_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
    },
    {
        path: 'signin',
        component: SignInComponent
    }
];

export const AUTHROUTING = RouterModule.forChild(AUTH_ROUTES);
