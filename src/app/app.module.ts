import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListeComponent } from './annuaire-module/liste/liste.component';
import { ContactComponent } from './annuaire-module/contact/contact.component';

@NgModule({
  declarations: [AppComponent, ListeComponent, ContactComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
