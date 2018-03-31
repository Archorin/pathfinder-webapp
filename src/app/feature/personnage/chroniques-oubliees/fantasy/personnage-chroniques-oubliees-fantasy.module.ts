import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonnageChroniquesOublieesFantasyRoutingModule } from './personnage-chroniques-oubliees-fantasy-routing.module';
import { PersonnageFichePageComponent } from './page/fiche/personnage-fiche-page.component';
import { FicheComponent } from './component/fiche/fiche.component';
import { CiviliteLectureComponent } from './component/fiche/civilite-lecture/civilite-lecture.component';
import { CaracteristiqueLectureComponent } from './component/fiche/caracteristique-lecture/caracteristique-lecture.component';
import { CombatLectureComponent } from './component/fiche/combat-lecture/combat-lecture.component';
import { VitaliteLectureComponent } from './component/fiche/vitalite-lecture/vitalite-lecture.component';
import { DefenseLectureComponent } from './component/fiche/defense-lecture/defense-lecture.component';
import { ArmeLectureComponent } from './component/fiche/arme-lecture/arme-lecture.component';
import { CapaciteRacialeLectureComponent } from './component/fiche/capacite-raciale-lecture/capacite-raciale-lecture.component';

@NgModule({
  imports: [
    CommonModule,
    PersonnageChroniquesOublieesFantasyRoutingModule
  ],
  declarations: [
    PersonnageFichePageComponent,
    FicheComponent,
    CiviliteLectureComponent,
    CaracteristiqueLectureComponent,
    CombatLectureComponent,
    VitaliteLectureComponent,
    DefenseLectureComponent,
    ArmeLectureComponent,
    CapaciteRacialeLectureComponent
  ]
})
export class PersonnageChroniquesOublieesFantasyModule { }
