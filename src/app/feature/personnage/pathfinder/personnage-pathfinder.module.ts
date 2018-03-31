// Core
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { PersonnagePathfinderRoutingModule } from './personnage-pathfinder-routing.module';

// Controlleurs de pages
import { PersonnageEditeurPageComponent } from './page/editeur/personnage-editeur-page.component';
import { PersonnageFichePageComponent } from './page/fiche/personnage-fiche-page.component';

// Components
import { FicheComponent } from './component/fiche/fiche.component';
import { CiviliteComponent } from './component/fiche/civilite/civilite.component';
import { EditeurComponent } from './component/editeur/editeur.component';

// tslint:disable-next-line:max-line-length
import { CaracteristiqueComponent } from './component/fiche/caracteristique/caracteristique.component';
import { ResistanceComponent } from './component/fiche/resistance/resistance.component';
import { PointsDeVieComponent } from './component/fiche/points-de-vie/points-de-vie.component';
// tslint:disable-next-line:max-line-length
import { ValeurDeCombatComponent } from './component/fiche/valeur-de-combat/valeur-de-combat.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PersonnagePathfinderRoutingModule
  ],
  declarations: [
    PersonnageEditeurPageComponent,
    PersonnageFichePageComponent,
    FicheComponent,
    CiviliteComponent,
    EditeurComponent,
    CaracteristiqueComponent,
    ResistanceComponent,
    PointsDeVieComponent,
    ValeurDeCombatComponent
  ],
  // Permet d'utiliser une syntaxe <ma-variable> dans les transclusions
  schemas: [NO_ERRORS_SCHEMA]
})
export class PersonnagePathfinderModule { }
