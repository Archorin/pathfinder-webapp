import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
