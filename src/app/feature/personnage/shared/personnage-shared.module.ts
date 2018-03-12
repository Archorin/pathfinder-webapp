// Core
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { PersonnageSharedRoutingModule } from './personnage-shared-routing.module';

// Controlleurs de pages
import { PersonnageListePageComponent } from './page/liste/personnage-liste-page.component';

// Components
import { PersonnageListeComponent } from './component/liste/personnage-liste.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PersonnageSharedRoutingModule
  ],
  declarations: [
    PersonnageListePageComponent,
    PersonnageListeComponent
  ],
  // Permet d'utiliser une syntaxe <ma-variable> dans les transclusions
  schemas: [NO_ERRORS_SCHEMA]
})
export class PersonnageSharedModule { }
