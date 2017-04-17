import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './appComponent/app.component';
import {ContactComponent} from "./contactsComponent/contact.component";
import {ContactsService} from "./contactsService";
import {ContactsRepository} from "./contactsRepository"

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ContactsService, ContactsRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }

//ng serve!!!
