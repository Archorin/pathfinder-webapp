import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'app/shared/wrapper/modal/modal.component';

@Component({
  selector: 'feature-personnage-feuille-civilite-edition',
  templateUrl: './civilite-edition.component.html',
  styleUrls: ['./civilite-edition.component.scss']
})
export class CiviliteEditionComponent {
@ViewChild('editionCiviliteModal') modal: ModalComponent;
  constructor() { }

  edition() {
    this.modal.showModal();
  }
}
