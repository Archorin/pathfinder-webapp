import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonnageChroniquesOublieesFantasyRoutingModule } from './personnage-chroniques-oubliees-fantasy-routing.module';
import { PersonnageFichePageComponent } from './page/fiche/personnage-fiche-page.component';

@NgModule({
  imports: [
    CommonModule,
    PersonnageChroniquesOublieesFantasyRoutingModule
  ],
  declarations: [PersonnageFichePageComponent]
})
export class PersonnageChroniquesOublieesFantasyModule { }
