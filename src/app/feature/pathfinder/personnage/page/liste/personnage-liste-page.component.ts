import { Component, OnInit, Input } from '@angular/core';
import { PersonnageService } from 'app/feature/commun/personnage/service/personnage.service';
import { Personnage } from 'app/feature/commun/personnage/personnage';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'feature-personnage-liste-page',
  templateUrl: './personnage-liste-page.component.html',
  providers: [ PersonnageService ],
})

export class PersonnageListePageComponent implements OnInit {
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
