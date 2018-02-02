import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-gestionnaire-de-taches-light',
  templateUrl: './gestionnaire-de-taches-light.component.html',
  styleUrls: ['./gestionnaire-de-taches-light.component.css']
})
export class GestionnaireDeTachesLightComponent implements OnInit {
  active: string = null;
  rotate: string = null;
  collapsed: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  public toogleActive() {
    this.active = this.active ? null : 'active';
    this.rotate = this.rotate ? null : 'fa-rotate-180';
  }
}
