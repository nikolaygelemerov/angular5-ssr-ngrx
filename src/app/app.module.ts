import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './modules/auth/components/authentication/authentication.component';
import { MessageComponent } from './modules/message/components/message.component';
import { HttpService } from './modules/shared/services/http/http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'server-side-rendering'}),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
