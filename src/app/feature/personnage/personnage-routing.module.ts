import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonnageEditeurPageComponent } from './page/editeur/personnage-editeur-page.component';
import { PersonnageListePageComponent } from './page/liste/personnage-liste-page.component';

const routes: Routes = [
  { path: '', component: PersonnageListePageComponent },
  { path: ':id', component: PersonnageEditeurPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnageRoutingModule { }
