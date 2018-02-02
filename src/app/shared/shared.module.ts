/* Ng */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/* Composants Bootstrap */
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

/* Composants shared */
import { GestionnaireDeTachesComponent } from './gestionnaire-de-taches/gestionnaire-de-taches/gestionnaire-de-taches.component';
import { ActionComponent } from './gestionnaire-de-taches/action/action.component';
import { EtapeComponent } from './gestionnaire-de-taches/etape/etape.component';
import { TacheComponent } from './gestionnaire-de-taches/tache/tache.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule
  ],
  declarations: [GestionnaireDeTachesComponent, ActionComponent, EtapeComponent, TacheComponent, LoginComponent],
  exports: [GestionnaireDeTachesComponent, TacheComponent, LoginComponent]
})
export class SharedModule { }
