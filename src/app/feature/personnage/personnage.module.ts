// Core
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { PersonnageRoutingModule } from './personnage-routing.module';

// Routes
import { PersonnageListeRoute } from './route/personnage-liste-route/personnage-liste.route';

// Controlleurs
import { PersonnageController } from './controller/personnage/personnage.controller';
import { PersonnageListComponent } from './component/liste/personnage-list.component';
import { PersonnageEditeurController } from './controller/editeur/personnage-editeur.controller';

// Components
import { FicheComponent } from './component/editeur/fiche/fiche.component';
import { CiviliteLectureComponent } from './component/editeur/fiche/civilite/civilite-lecture/civilite-lecture.component';
import { CiviliteEditionComponent } from './component/editeur/fiche/civilite/civilite-edition/civilite-edition.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PersonnageRoutingModule
  ],
  declarations: [
    PersonnageListeRoute,
    PersonnageController,
    PersonnageEditeurController,
    PersonnageListComponent,
    FicheComponent,
    CiviliteLectureComponent,
    CiviliteEditionComponent
  ],
  // Permet d'utiliser une syntaxe <ma-variable> dans les transclusions
  schemas: [NO_ERRORS_SCHEMA]
})
export class PersonnageModule { }
