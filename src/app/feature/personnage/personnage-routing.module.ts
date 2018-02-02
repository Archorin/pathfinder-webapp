import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonnageListeRoute } from './personnage-liste-route/personnage-liste.route';
import { PersonnageEditionRoute } from './personnage-edition-route/personnage-edition.route';
import { LoginComponent } from 'app/core/authentification/login/login.component';

const routes: Routes = [
  { path: '', component: PersonnageListeRoute },
  { path: 'login', component: LoginComponent },
  { path: ':id', component: PersonnageEditionRoute }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnageRoutingModule { }
