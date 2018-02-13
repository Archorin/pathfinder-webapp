// Core
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { PersonnageRoutingModule } from './personnage-routing.module';

// Controlleurs
import { PersonnageListeController } from './controller/liste/personnage-liste.controller';
import { PersonnageEditeurController } from './controller/editeur/personnage-editeur.controller';

// Components
import { FicheComponent } from './editeur/fiche/fiche.component';
import { PersonnageListeComponent } from './liste/personnage-liste.component';
import { CiviliteLectureComponent } from './editeur/fiche/civilite/civilite-lecture/civilite-lecture.component';
import { CiviliteEditionComponent } from './editeur/fiche/civilite/civilite-edition/civilite-edition.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PersonnageRoutingModule
  ],
  declarations: [
    PersonnageEditeurController,
    PersonnageListeController,
    PersonnageListeComponent,
    FicheComponent,
    CiviliteLectureComponent,
    CiviliteEditionComponent
  ],
  // Permet d'utiliser une syntaxe <ma-variable> dans les transclusions
  schemas: [NO_ERRORS_SCHEMA]
})
export class PersonnageModule { }
