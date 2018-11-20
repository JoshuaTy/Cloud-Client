import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
<<<<<<< HEAD
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

const routes: Routes = [
  { 
  path: "", component: LoginComponent 
  },
  {
    path: "register", component: RegisterComponent
  },
=======
import { EntryComponent } from "./components/entry/entry.component";

const routes: Routes = [
  { path: "", component: EntryComponent }
  // {
  //   path: "",
  //   redirectTo: "login"
  // }
>>>>>>> dc00290c20e7e0f84af40dde5462037698ebdfe5
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
