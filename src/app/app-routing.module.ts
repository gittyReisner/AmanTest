import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesComponent } from './jokes/jokes.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'jokes', component: JokesComponent },
  {
    path: "",
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
