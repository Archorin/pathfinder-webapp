import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { SharedModule } from 'app/shared/shared.module';

import { PersonnageRoutingModule } from './personnage-routing.module';
import { PersonnageController } from './personnage-controller/personnage.controller';
import { PersonnageListeRoute } from './personnage-liste-route/personnage-liste.route';
import { PersonnageEditionRoute } from './personnage-edition-route/personnage-edition.route';
import { PersonnageService } from './personnage.service';
import { PersonnageListComponent } from './personnage-list/personnage-list.component';
import { PersonnageEditeurComponent } from './personnage-editeur/personnage-editeur.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PersonnageRoutingModule,
    PopoverModule.forRoot()
  ],
  providers: [ PersonnageService ],
  declarations: [
    PersonnageController,
    PersonnageListeRoute,
    PersonnageEditionRoute,
    PersonnageListComponent,
    PersonnageEditeurComponent
  ],
})
export class PersonnageModule { }
