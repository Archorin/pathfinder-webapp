import { Component, OnInit, Input, HostListener, ViewChild } from '@angular/core';
import { Personnage } from 'app/feature/personnage/shared/personnage';
// tslint:disable-next-line:max-line-length
import { CiviliteEditionComponent } from 'app/feature/personnage/pathfinder/component/editeur/civilite/civilite-edition/civilite-edition.component';

@Component({
  selector: 'feature-personnage-feuille-civilite-lecture',
  templateUrl: './civilite-lecture.component.html',
  styleUrls: ['./civilite-lecture.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '(click)': 'clickEvent($event)' }
})
export class CiviliteLectureComponent implements OnInit {
  @Input() personnage: Personnage;
  @ViewChild(CiviliteEditionComponent) editionComponent: CiviliteEditionComponent;

  constructor() {}

  ngOnInit() {
  }

  clickEvent($event) {
    console.log('event de click');
    this.editionComponent.show();
    // this.editionComponent.edition();
  }
}
