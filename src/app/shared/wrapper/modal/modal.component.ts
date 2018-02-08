import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @ViewChild(ModalDirective) modal: ModalDirective;
  messages: string[];

  showModal() {
    console.log('showmodal');
    this.messages = [];
    this.modal.show();
  }

  handler(type: string, $event: ModalDirective) {
    this.messages.push(
      `event ${type} is fired${$event.dismissReason
        ? ', dismissed by ' + $event.dismissReason
        : ''}`
    );
  }
}

