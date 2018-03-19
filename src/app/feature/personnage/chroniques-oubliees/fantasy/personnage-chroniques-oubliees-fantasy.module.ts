import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonnageChroniquesOublieesFantasyRoutingModule } from './personnage-chroniques-oubliees-fantasy-routing.module';
import { PersonnageFichePageComponent } from './page/fiche/personnage-fiche-page.component';
import { FicheComponent } from './component/fiche/fiche.component';
import { CiviliteLectureComponent } from './component/fiche/civilite-lecture/civilite-lecture.component';

@NgModule({
  imports: [
    CommonModule,
    PersonnageChroniquesOublieesFantasyRoutingModule
  ],
  declarations: [
    PersonnageFichePageComponent,
    FicheComponent,
    CiviliteLectureComponent
  ]
})
export class PersonnageChroniquesOublieesFantasyModule { }
