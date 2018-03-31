import { Component, OnInit, Input, HostListener, ViewChild } from '@angular/core';
import { Personnage } from 'app/feature/personnage/shared/personnage';

@Component({
  selector: 'feature-personnage-feuille-civilite',
  templateUrl: './civilite.component.html',
  styleUrls: ['./civilite.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  // host: { '(click)': 'clickEvent($event)' }
})
export class CiviliteComponent implements OnInit {
  @Input() personnage: Personnage;

  constructor() {}

  ngOnInit() {
  }
}
