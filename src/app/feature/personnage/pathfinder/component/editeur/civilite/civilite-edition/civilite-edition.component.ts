import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'app/shared/wrapper/modal/modal.component';

@Component({
  selector: 'feature-personnage-feuille-civilite-edition',
  templateUrl: './civilite-edition.component.html'
})
export class CiviliteEditionComponent implements OnInit {
  @ViewChild(ModalComponent) modalComponent: ModalComponent;
  constructor() { }

  ngOnInit() {
  }

  public show() {
    console.log('Composant spécifique');
    this.modalComponent.showModal();
  }
}
