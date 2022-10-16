import { NgxPermissionsModule } from 'ngx-permissions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdminOnlyComponent } from './admin-only/admin-only.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    AdminOnlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
