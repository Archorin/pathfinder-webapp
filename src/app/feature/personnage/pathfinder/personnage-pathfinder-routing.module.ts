import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonnageEditeurPageComponent } from './page/editeur/personnage-editeur-page.component';
import { PersonnageFichePageComponent } from './page/fiche/personnage-fiche-page.component';

const routes: Routes = [
  { path: 'edition/:id', component: PersonnageEditeurPageComponent },
  { path: ':id', component: PersonnageFichePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnagePathfinderRoutingModule { }
