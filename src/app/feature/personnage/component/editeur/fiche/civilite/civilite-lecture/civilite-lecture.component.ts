import { Component, OnInit, Input, HostListener, ViewChild } from '@angular/core';
import { Personnage } from 'app/feature/personnage/personnage';
// tslint:disable-next-line:max-line-length
import { CiviliteEditionComponent } from 'app/feature/personnage/component/editeur/fiche/civilite/civilite-edition/civilite-edition.component';

@Component({
  selector: 'feature-personnage-feuille-civilite-lecture',
  templateUrl: './civilite-lecture.component.html',
  styleUrls: ['./civilite-lecture.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  // host: { '(click)': 'onClick($event)' }
})
export class CiviliteLectureComponent implements OnInit {
  @Input() personnage: Personnage;
  @ViewChild(CiviliteEditionComponent) editionComponent: CiviliteEditionComponent;

  constructor() {}

  ngOnInit() {
  }

  onClick($event) {
    // this.EditionComponent.show();
    console.log('event de click');
    this.editionComponent.edition();
  }
}
