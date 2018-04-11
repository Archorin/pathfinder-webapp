/* Ng */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Composants Bootstrap */
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal/modal.module';
import { PopoverModule, PopoverDirective } from 'ngx-bootstrap/popover';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

/* Composants shared */
import { GestionnaireDeTachesComponent } from './gestionnaire-de-taches/gestionnaire-de-taches/gestionnaire-de-taches.component';
import { ActionComponent } from './gestionnaire-de-taches/action/action.component';
import { EtapeComponent } from './gestionnaire-de-taches/etape/etape.component';
import { TacheComponent } from './gestionnaire-de-taches/tache/tache.component';

// tslint:disable-next-line:max-line-length
import { CaseObliqueComponent } from './graphique/pathfinder/case-oblique/case-oblique.component';
import { PictoComponent } from './wrapper/picto/picto.component';
import { ModalComponent } from './wrapper/modal/modal.component';
import { CaseComponent } from './graphique/chroniques-oubliees/case/case.component';
import { AlterationCaracteristiquePipe } from './pipe/alteration-caracteristique/alteration-caracteristique.pipe';
import { PlaceholderFiligranePipe } from './pipe/placeholder-filigrane/placeholder-filigrane.pipe';
import { ConcatPipe } from './pipe/concat/concat.pipe';
import { AlterationSignePipe } from './pipe/alteration-signe/alteration-signe.pipe';
import { PopoverFicheDirective } from './graphique/popover-fiche/popover-fiche.directive';
import { PopoverFicheCofComponent } from './graphique/popover-fiche/popover-fiche-cof/popover-fiche-cof.component';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
  ],
  declarations: [
    GestionnaireDeTachesComponent,
    ActionComponent,
    EtapeComponent,
    TacheComponent,
    // Graphiques
    CaseObliqueComponent,
    CaseComponent,
    // Wrappers
    PictoComponent,
    ModalComponent,
    // Pipes
    AlterationCaracteristiquePipe,
    PlaceholderFiligranePipe,
    ConcatPipe,
    AlterationSignePipe,
    PopoverFicheDirective,
    PopoverFicheCofComponent,
  ],
  exports: [
    GestionnaireDeTachesComponent,
    TacheComponent,
    // Graphiques
    CaseComponent,
    CaseObliqueComponent,
    // Wrappers
    ModalComponent,
    PictoComponent,
    // Pipes
    AlterationCaracteristiquePipe,
    PlaceholderFiligranePipe,
    ConcatPipe,
    AlterationSignePipe,
    PopoverFicheDirective,
    PopoverFicheCofComponent,
  ]
})
export class SharedModule { }
