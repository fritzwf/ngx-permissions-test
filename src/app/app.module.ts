import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FirstComponent } from './first/first.component';
import { NgModule } from '@angular/core';
import { NgxPermissionsModule } from 'ngx-permissions';
import { SecondComponent } from './second/second.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPermissionsModule.forRoot()
  ],
  exports: [NgxPermissionsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
