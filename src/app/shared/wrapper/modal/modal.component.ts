import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @ViewChild(ModalDirective) modal: ModalDirective;

  showModal() {
    this.modal.show();
  }
}
