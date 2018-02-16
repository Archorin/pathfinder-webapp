import { Component, OnInit, Input } from '@angular/core';
import { PersonnageService } from 'app/feature/personnage/service/personnage.service';
import { Personnage } from 'app/feature/personnage/model/personnage';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'feature-personnage-liste-controller',
  templateUrl: './personnage-liste.controller.html',
  providers: [ PersonnageService ],
})

export class PersonnageListeController implements OnInit {
  @Input() personnages: Personnage[] = new Array<Personnage>();

  constructor(
    private personnageService: PersonnageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAll();
    console.log('ici');
  }

  getAll() {
    this.personnageService.getPersonnages()
      .subscribe(
        personnages => {
          this.personnages = personnages;
      });
  }
}
