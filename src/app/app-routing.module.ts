import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { HttpComponent } from './http/http.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {path: '', redirectTo: 'lifecycle-hooks', pathMatch: 'full'},
  {path: 'lifecycle-hooks', component: LifecycleComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'http', component: HttpComponent},
  {path: 'forms', component: FormsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
