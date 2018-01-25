import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './modules/auth/components/authentication/authentication.component';
import { MessageComponent } from './modules/message/components/message.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'server-side-rendering'}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
