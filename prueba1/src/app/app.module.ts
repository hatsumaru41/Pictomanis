import {HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './page/usuario/usuario.component';
import { RolComponent } from './page/rol/rol.component';
import { UsuarioListarComponent } from './page/usuario/usuario-listar/usuario-listar.component';
import { RolListarComponent } from './page/rol/rol-listar/rol-listar.component';
import{MatTableModule} from '@angular/material/table'

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    RolComponent,
    UsuarioListarComponent,
    RolListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
