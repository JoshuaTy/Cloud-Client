import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NbThemeModule, NbLayoutModule } from "@nebular/theme";
import { LoginComponent } from "./components/login/login.component";
import { NebularModule } from "./modules/nebular/nebular.module";
import { EntryComponent } from './components/entry/entry.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from "./components/register/register.component";
import { UserService } from "./_services/user.service";
import { HttpClientModule } from "@angular/common/http";
import { AlertComponent } from './_directives/alert.component';
import { AlertService } from "./_services/alert.service";
import { AuthenticationService } from "./_services/authentication.service";

@NgModule({
  declarations: [AppComponent, LoginComponent, EntryComponent, RegisterComponent, AlertComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: "cosmic" }),
    NbLayoutModule,
    NebularModule,
    HttpClientModule,
  ],
  providers: [UserService, AlertService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
