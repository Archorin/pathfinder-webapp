import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HubComponent } from 'app/feature/portail/hub/hub.component';

const routes: Routes = [
  { path: '', component: HubComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortailRoutingModule { }
