// Core
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { PersonnageRoutingModule } from './personnage-routing.module';

// Controlleurs de pages
import { PersonnageListePageComponent } from './page/liste/personnage-liste-page.component';
import { PersonnageEditeurPageComponent } from './page/editeur/personnage-editeur-page.component';
import { PersonnageFichePageComponent } from './page/fiche/personnage-fiche-page.component';

// Components
import { FicheComponent } from './component/fiche/fiche.component';
import { PersonnageListeComponent } from './component/liste/personnage-liste.component';
import { CiviliteLectureComponent } from './component/fiche/civilite/civilite-lecture/civilite-lecture.component';
// import { CiviliteEditionComponent } from './component/fiche/civilite/civilite-edition/civilite-edition.component';
import { EditeurComponent } from './component/editeur/editeur.component';
// tslint:disable-next-line:max-line-length
import { CaracteristiqueLectureComponent } from './component/fiche/caracteristique/caracteristique-lecture/caracteristique-lecture.component';
import { ResistanceLectureComponent } from './component/fiche/resistance/resistance-lecture/resistance-lecture.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PersonnageRoutingModule
  ],
  declarations: [
    PersonnageEditeurPageComponent,
    PersonnageListePageComponent,
    PersonnageFichePageComponent,
    PersonnageListeComponent,
    FicheComponent,
    CiviliteLectureComponent,
    // CiviliteEditionComponent,
    EditeurComponent,
    CaracteristiqueLectureComponent,
    ResistanceLectureComponent
  ],
  // Permet d'utiliser une syntaxe <ma-variable> dans les transclusions
  schemas: [NO_ERRORS_SCHEMA]
})
export class PersonnageModule { }
