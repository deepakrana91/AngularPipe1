import { FormdataService } from './formdata.service';
import { FormService } from './form.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FormService,FormdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
