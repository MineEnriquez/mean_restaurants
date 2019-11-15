import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RetrieveallComponent } from './retrieveall/retrieveall.component';
import { XxxbetaxxxComponent } from './xxxbetaxxx/xxxbetaxxx.component';

@NgModule({
  declarations: [
    AppComponent,
    RetrieveallComponent,
    XxxbetaxxxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
