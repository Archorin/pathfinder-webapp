import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';

import { PortailRoutingModule } from './portail-routing.module';
import { HubComponent } from './hub/hub.component';

@NgModule({
  imports: [
    CommonModule,
    PortailRoutingModule,
    ModalModule
  ],
  declarations: [HubComponent],
  exports: []
})
export class PortailModule { }
