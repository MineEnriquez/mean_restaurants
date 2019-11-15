import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService} from './services/http.service';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RetrieveallComponent } from './retrieveall/retrieveall.component';
import { XxxbetaxxxComponent } from './xxxbetaxxx/xxxbetaxxx.component';
import { NewrestaurantComponent } from './newrestaurant/newrestaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    RetrieveallComponent,
    XxxbetaxxxComponent,
    NewrestaurantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
