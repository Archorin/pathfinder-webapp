/* Ng */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Composants Bootstrap */
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

/* Composants shared */
import { GestionnaireDeTachesComponent } from './gestionnaire-de-taches/gestionnaire-de-taches/gestionnaire-de-taches.component';
import { ActionComponent } from './gestionnaire-de-taches/action/action.component';
import { EtapeComponent } from './gestionnaire-de-taches/etape/etape.component';
import { TacheComponent } from './gestionnaire-de-taches/tache/tache.component';
// tslint:disable-next-line:max-line-length
import { GestionnaireDeTachesLightComponent } from './gestionnaire-de-taches-light/gestionnaire-de-taches-light/gestionnaire-de-taches-light.component';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  declarations: [GestionnaireDeTachesComponent, ActionComponent, EtapeComponent, TacheComponent, GestionnaireDeTachesLightComponent],
  exports: [GestionnaireDeTachesLightComponent, TacheComponent]
})
export class SharedModule { }
