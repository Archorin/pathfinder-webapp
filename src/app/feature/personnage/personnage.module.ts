// Core
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { PersonnageRoutingModule } from './personnage-routing.module';

// Routes
import { PersonnageListeRoute } from './route/personnage-liste-route/personnage-liste.route';
import { PersonnageEditionRoute } from './route/personnage-edition-route/personnage-edition.route';

// Controlleurs
import { PersonnageController } from './controller/personnage.controller';
import { PersonnageListComponent } from './component/liste/personnage-list.component';
import { PersonnageEditeurComponent } from './component/editeur/personnage-editeur.component';

// Components
import { FicheComponent } from './fiche/fiche.component';
import { CiviliteLectureComponent } from './fiche/civilite/civilite-lecture/civilite-lecture.component';
import { CiviliteEditionComponent } from './fiche/civilite/civilite-edition/civilite-edition.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PersonnageRoutingModule
  ],
  declarations: [
    PersonnageController,
    PersonnageListeRoute,
    PersonnageEditionRoute,
    PersonnageListComponent,
    PersonnageEditeurComponent,
    FicheComponent,
    CiviliteLectureComponent,
    CiviliteEditionComponent
  ],
  // Permet d'utiliser une syntaxe <ma-variable> dans les transclusions
  schemas: [NO_ERRORS_SCHEMA]
})
export class PersonnageModule { }
