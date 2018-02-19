import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonnageListePageComponent } from './page/liste/personnage-liste-page.component';

const routes: Routes = [
  {
    path: 'pathfinder',
    loadChildren: 'app/feature/personnage/pathfinder/personnage-pathfinder.module#PersonnagePathfinderModule'
  },
  { path: '', component: PersonnageListePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnageCommunRoutingModule { }
