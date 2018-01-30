import { Component, OnInit, Input } from '@angular/core';
import { Personnage } from '../personnage';

@Component({
  selector: 'feature-personnage-editeur',
  templateUrl: './personnage-editeur.component.html',
  styleUrls: ['./personnage-editeur.component.css']
})
export class PersonnageEditeurComponent implements OnInit {
  @Input() prototype: Personnage;

  constructor() { }

  ngOnInit() {
  }
}
