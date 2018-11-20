import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NbThemeModule, NbLayoutModule } from "@nebular/theme";
import { LoginComponent } from "./components/login/login.component";
import { NebularModule } from "./modules/nebular/nebular.module";

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: "default" }),
    NbLayoutModule,
    NebularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
