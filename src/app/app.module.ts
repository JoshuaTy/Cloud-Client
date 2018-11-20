import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NbThemeModule, NbLayoutModule } from "@nebular/theme";
import { NebularModule } from "./modules/nebular/nebular.module";
import { UserService } from "./_services/user.service";
import { HttpClientModule } from "@angular/common/http";
import { AlertComponent } from "./_directives/alert.component";
import { AlertService } from "./_services/alert.service";
import { AuthenticationService } from "./_services/authentication.service";

import { LoginComponent } from "./components/login/login.component";
import { EntryComponent } from "./components/entry/entry.component";
import { RegisterComponent } from "./components/register/register.component";
import { AdminComponent } from "./components/admin/admin.component";
import { UsernameComponent } from './components/login/username/username.component';
import { PasswordComponent } from './components/login/password/password.component';
import { AuthGuard } from "./_guards/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EntryComponent,
    RegisterComponent,
    AdminComponent,
    AlertComponent,
    UsernameComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: "cosmic" }),
    NbLayoutModule,
    NebularModule,
    HttpClientModule
  ],
  providers: [AuthGuard,UserService, AlertService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
