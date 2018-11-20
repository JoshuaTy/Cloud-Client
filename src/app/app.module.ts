import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NbThemeModule, NbLayoutModule } from "@nebular/theme";
import { NebularModule } from "./modules/nebular/nebular.module";

import { LoginComponent } from "./components/login/login.component";
import { EntryComponent } from "./components/entry/entry.component";
import { RegisterComponent } from "./components/register/register.component";
import { AdminComponent } from "./components/admin/admin.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EntryComponent,
    RegisterComponent,
    AdminComponent
  ],
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
