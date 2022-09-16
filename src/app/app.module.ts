import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdiomasComponent } from './page/idiomas/idiomas.component';
import { ResenasComponent } from './page/resenas/resenas.component';
import { ResenasListarComponent } from './page/resenas/resenas-listar/resenas-listar.component';
import { IdiomasListarComponent } from './page/idiomas/idiomas-listar/idiomas-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    IdiomasComponent,
    ResenasComponent,
    ResenasListarComponent,
    IdiomasListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
