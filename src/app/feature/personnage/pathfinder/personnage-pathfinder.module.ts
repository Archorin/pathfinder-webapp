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
import { CiviliteLectureComponent } from './component/fiche/civilite/civilite-lecture/civilite-lecture.component';
// import { CiviliteEditionComponent } from './component/fiche/civilite/civilite-edition/civilite-edition.component';
import { EditeurComponent } from './component/editeur/editeur.component';
// tslint:disable-next-line:max-line-length
import { CaracteristiqueLectureComponent } from './component/fiche/caracteristique/caracteristique-lecture/caracteristique-lecture.component';
import { ResistanceLectureComponent } from './component/fiche/resistance/resistance-lecture/resistance-lecture.component';
import { PointsDeVieLectureComponent } from './component/fiche/points-de-vie/points-de-vie-lecture/points-de-vie-lecture.component';


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
    CiviliteLectureComponent,
    EditeurComponent,
    CaracteristiqueLectureComponent,
    ResistanceLectureComponent,
    PointsDeVieLectureComponent
  ],
  // Permet d'utiliser une syntaxe <ma-variable> dans les transclusions
  schemas: [NO_ERRORS_SCHEMA]
})
export class PersonnagePathfinderModule { }
