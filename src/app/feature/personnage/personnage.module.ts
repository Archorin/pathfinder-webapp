// Core
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { PersonnageRoutingModule } from './personnage-routing.module';

// Controlleurs de pages
import { PersonnageListePageComponent } from './page/liste/personnage-liste-page.component';
import { PersonnageEditeurPageComponent } from './page/editeur/personnage-editeur-page.component';

// Components
import { FicheComponent } from './component/editeur/fiche/fiche.component';
import { PersonnageListeComponent } from './component/liste/personnage-liste.component';
import { CiviliteLectureComponent } from './component/editeur/fiche/civilite/civilite-lecture/civilite-lecture.component';
import { CiviliteEditionComponent } from './component/editeur/fiche/civilite/civilite-edition/civilite-edition.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PersonnageRoutingModule
  ],
  declarations: [
    PersonnageEditeurPageComponent,
    PersonnageListePageComponent,
    PersonnageListeComponent,
    FicheComponent,
    CiviliteLectureComponent,
    CiviliteEditionComponent
  ],
  // Permet d'utiliser une syntaxe <ma-variable> dans les transclusions
  schemas: [NO_ERRORS_SCHEMA]
})
export class PersonnageModule { }
