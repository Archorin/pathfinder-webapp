import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonnageController } from '../personnage-controller/personnage.controller';

@Component({
  templateUrl: './personnage-liste.route.html',
  styleUrls: ['./personnage-liste.route.css']
})

export class PersonnageListeRoute implements OnInit {

  constructor() { }

  @ViewChild(PersonnageController) controller: PersonnageController;

  ngOnInit() {
    this.controller.getListe();
  }

}
