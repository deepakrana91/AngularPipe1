import { FormdataService } from './formdata.service';
import { FormService } from './form.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { CapitalizePipe } from './capitalize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    CapitalizePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FormService,FormdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
