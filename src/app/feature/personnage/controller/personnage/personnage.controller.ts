import { Component, OnInit } from '@angular/core';
import { PersonnageService } from 'app/feature/personnage/service/personnage.service';
import { Personnage } from 'app/feature/personnage/model/personnage';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'feature-personnage-controller',
  templateUrl: './personnage.controller.html',
  styleUrls: ['./personnage.controller.css'],
  providers: [ PersonnageService ],
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
}
