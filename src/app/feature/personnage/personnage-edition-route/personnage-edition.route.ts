import { Component, OnInit, ViewChild } from '@angular/core';
import { PersonnageController } from '../personnage-controller/personnage.controller';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './personnage-edition.route.html',
  styleUrls: ['./personnage-edition.route.css']
})
export class PersonnageEditionRoute implements OnInit {

  constructor(private route: ActivatedRoute) { }

  @ViewChild(PersonnageController) controller: PersonnageController;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.controller.getPrototype(id);
  }

}
