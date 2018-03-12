import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonnageListePageComponent } from './page/liste/personnage-liste-page.component';

const routes: Routes = [
  {
    path: 'pathfinder',
    loadChildren: 'app/feature/personnage/pathfinder/personnage-pathfinder.module#PersonnagePathfinderModule'
  },
  {
    path: 'chroniques-oubliees-fantasy',
    // tslint:disable-next-line:max-line-length
    loadChildren: 'app/feature/personnage/chroniques-oubliees/fantasy/personnage-chroniques-oubliees-fantasy.module#PersonnageChroniquesOublieesFantasyModule'
  },
  { path: '', component: PersonnageListePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnageSharedRoutingModule { }
