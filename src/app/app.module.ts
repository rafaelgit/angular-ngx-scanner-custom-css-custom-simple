import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  imports: [BrowserModule, FormsModule, ZXingScannerModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
