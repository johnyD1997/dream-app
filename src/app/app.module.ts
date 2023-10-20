import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import { AppRoutingModule } from './app-routing.module';
import { MyDreamAppComponent } from './my-dream-app/my-dream-app.component';
import { UsernameCheckComponent } from './username-check/username-check.component';
import { PhonesComponent } from './phones/phones.component';
import { PhoneListsComponent } from './phones/phone-lists/phone-lists.component';
import { PhoneItemComponent } from './phones/phone-lists/phone-item/phone-item.component';
import { PhoneDetailsComponent } from './phones/phone-details/phone-details.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DisplayDetailsComponent,
    MyDreamAppComponent,
    UsernameCheckComponent,
    PhonesComponent,
    PhoneListsComponent,
    PhoneItemComponent,
    PhoneDetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
