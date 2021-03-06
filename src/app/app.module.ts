import { BrowserModule } from "@angular/platform-browser";
import { NgModule, InjectionToken } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NbThemeModule, NbLayoutModule, NbDatepickerModule, NbDialogService } from "@nebular/theme";
import { NebularModule } from "./modules/nebular.module";
import { UserService } from "./_services/user.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AlertService } from "./_services/alert.service";
import { AuthenticationService } from "./_services/authentication.service";
import { AuthGuard } from "./_guards/auth.guard";
import { JwtInterceptor } from "./_helpers/jwt.interceptor";
import { ErrorInterceptor } from "./_helpers/error.interceptor";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { DashboardModule } from "./components/dashboard/dashboard.module";
import { MedicalRecordComponent } from "./components/dashboard/components/doctor/components/medical-record/medical-record.component";
import { NbMomentDateModule, NbMomentDateService} from "@nebular/moment";
import { NbDateFnsDateModule} from "@nebular/date-fns";
import { DatePipe } from "@angular/common";
import { MedicalRecordService } from "./_services/medical-record.service";


@NgModule({
  declarations: [AppComponent, LoginComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot({ name: "cosmic" }),
    NebularModule,
    HttpClientModule,
    DashboardModule,
    NbDatepickerModule.forRoot(),
  ],
  providers: [
    AuthGuard,
    UserService,
    MedicalRecordService,
    AlertService,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ,
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
