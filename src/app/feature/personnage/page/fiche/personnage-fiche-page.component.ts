import { Component, OnInit, Input } from '@angular/core';
import { PersonnageService } from 'app/feature/personnage/service/personnage.service';
import { Personnage } from 'app/feature/personnage/personnage';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'feature-personnage-fiche-page',
  templateUrl: './personnage-fiche-page.component.html',
  providers: [ PersonnageService ],
})
export class PersonnageFichePageComponent implements OnInit {
  @Input() personnage: Personnage = new Personnage();

  constructor(
    private personnageService: PersonnageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getPrototype(id);
  }

  getPrototype(id) {
    this.personnageService.getPersonnage(id)
      .subscribe(
        personnage => {
          this.personnage = personnage;
      });
  }
}
