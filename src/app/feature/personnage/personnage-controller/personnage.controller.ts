import { Component, OnInit } from '@angular/core';
import { PersonnageService } from '../personnage.service';
import { Personnage } from '../personnage';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'feature-personnage-controller',
  templateUrl: './personnage.controller.html',
  styleUrls: ['./personnage.controller.css']
})
export class PersonnageController implements OnInit {

  personnages: Personnage[];
  personnage: Personnage;

  constructor(private personnageService: PersonnageService) { }

  ngOnInit() {
  }

  getListe() {
    this.personnageService.getPersonnages()
      .subscribe(
        personnages => {
          this.personnages = personnages;
        }
      );
  }

  getPrototype(id) {
    this.personnageService.getPersonnage(id)
      .subscribe(
        personnage => {
          this.personnage = personnage;
      });
  }
}
