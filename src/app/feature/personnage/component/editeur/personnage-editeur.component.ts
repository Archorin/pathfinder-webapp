import { Component, OnInit, Input } from '@angular/core';
import { Personnage } from 'app/feature/personnage/model/personnage';

@Component({
  selector: 'feature-personnage-editeur',
  templateUrl: './personnage-editeur.component.html',
  styleUrls: ['./personnage-editeur.component.scss']
})
export class PersonnageEditeurComponent implements OnInit {
  @Input() personnage: Personnage;

  constructor() { }

  ngOnInit() {
  }
}
