import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { UserService } from "./services/user.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { UseExistingWebDriver } from "protractor/built/driverProviders";
import { UserComponent } from "./user/user.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material";

@NgModule({
  declarations: [AppComponent, UserComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
