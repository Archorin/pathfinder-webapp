import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonnageChroniquesOublieesFantasyRoutingModule } from './personnage-chroniques-oubliees-fantasy-routing.module';
import { PersonnageFichePageComponent } from './page/fiche/personnage-fiche-page.component';
import { FicheComponent } from './component/fiche/fiche.component';
import { CiviliteComponent } from './component/fiche/civilite/civilite.component';
import { CaracteristiqueComponent } from './component/fiche/caracteristique/caracteristique.component';
import { CombatComponent } from './component/fiche/combat/combat.component';
import { VitaliteComponent } from './component/fiche/vitalite/vitalite.component';
import { DefenseComponent } from './component/fiche/defense/defense.component';
import { ArmeComponent } from './component/fiche/arme/arme.component';
import { CapaciteRacialeComponent } from './component/fiche/capacite-raciale/capacite-raciale.component';
import { SharedModule } from 'app/shared/shared.module';
import { PremierSegmentComponent } from './component/fiche/voie/premier-segment/premier-segment.component';
import { SecondSegmentComponent } from './component/fiche/voie/second-segment/second-segment.component';
import { HistoriqueCaractereComponent } from './component/fiche/historique-caractere/historique-caractere.component';
import { EquipementComponent } from './component/fiche/equipement/equipement.component';
import { ReglesOptionnellesComponent } from './component/fiche/regles-optionnelles/regles-optionnelles.component';
import { DescriptionComponent } from './component/fiche/description/description.component';

@NgModule({
  imports: [
    CommonModule,
    PersonnageChroniquesOublieesFantasyRoutingModule,
    SharedModule
  ],
  declarations: [
    PersonnageFichePageComponent,
    FicheComponent,
    CiviliteComponent,
    CaracteristiqueComponent,
    CombatComponent,
    VitaliteComponent,
    DefenseComponent,
    ArmeComponent,
    CapaciteRacialeComponent,
    PremierSegmentComponent,
    SecondSegmentComponent,
    HistoriqueCaractereComponent,
    EquipementComponent,
    ReglesOptionnellesComponent,
    DescriptionComponent
  ]
})
export class PersonnageChroniquesOublieesFantasyModule { }
