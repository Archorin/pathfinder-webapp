import { Component, OnInit, Input } from '@angular/core';
import { Personnage } from 'app/feature/commun/personnage/personnage';

@Component({
  selector: 'feature-personnage-editeur',
  templateUrl: './editeur.component.html'
})
export class EditeurComponent implements OnInit {
  @Input() personnage: Personnage = new Personnage();

  constructor() { }

  ngOnInit() {
  }

}
