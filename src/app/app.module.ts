import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeDirectiveDemoComponent } from './attribute-directive-demo/attribute-directive-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectiveDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
