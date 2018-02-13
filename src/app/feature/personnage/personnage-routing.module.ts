import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PersonnageListeRoute } from './route/personnage-liste-route/personnage-liste.route';
// import { PersonnageEditionRoute } from './route/personnage-editeur-route/personnage-edition.route';
import { PersonnageEditeurController } from './controller/editeur/personnage-editeur.controller';
import { PersonnageListeController } from './controller/liste/personnage-liste.controller';

const routes: Routes = [
  { path: '', component: PersonnageListeController },
  { path: ':id', component: PersonnageEditeurController }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnageRoutingModule { }
