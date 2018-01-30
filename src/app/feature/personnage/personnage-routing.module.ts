import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonnageListeRoute } from './personnage-liste-route/personnage-liste.route';
import { PersonnageEditionRoute } from './personnage-edition-route/personnage-edition.route';

const routes: Routes = [
  { path: '', component: PersonnageListeRoute },
  { path: ':id', component: PersonnageEditionRoute }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnageRoutingModule { }
