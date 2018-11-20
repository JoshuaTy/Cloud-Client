import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NbThemeModule, NbLayoutModule } from "@nebular/theme";
import { LoginComponent } from "./components/login/login.component";
import { NebularModule } from "./modules/nebular/nebular.module";
<<<<<<< HEAD
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
=======
import { EntryComponent } from './components/entry/entry.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, EntryComponent],
>>>>>>> dc00290c20e7e0f84af40dde5462037698ebdfe5
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: "cosmic" }),
    NbLayoutModule,
    NebularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
