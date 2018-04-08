import { Component, OnInit, Input } from '@angular/core';
import { Personnage } from 'app/feature/personnage/shared/personnage';

@Component({
  selector: 'feature-personnage-cof-fiche-civilite',
  templateUrl: './civilite.component.html',
  styleUrls: ['./civilite.component.scss']
})
export class CiviliteComponent implements OnInit {
  @Input() personnage: Personnage;
  constructor() { }

  ngOnInit() {
  }

}
