import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortailRoutingModule } from './portail-routing.module';
import { HubComponent } from './hub/hub.component';

@NgModule({
  imports: [
    CommonModule,
    PortailRoutingModule
  ],
  declarations: [HubComponent],
  exports: []
})
export class PortailModule { }
