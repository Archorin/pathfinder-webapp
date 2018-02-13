import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-gestionnaire-de-taches',
  templateUrl: './gestionnaire-de-taches.component.html',
  styleUrls: ['./gestionnaire-de-taches.component.css']
})
export class GestionnaireDeTachesComponent implements OnInit {
  active: string = 'active';
  rotate: string = 'fa-rotate-180';
  collapsed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public toogleActive() {
    this.active = this.active ? null : 'active';
    this.rotate = this.rotate ? null : 'fa-rotate-180';
  }
}
