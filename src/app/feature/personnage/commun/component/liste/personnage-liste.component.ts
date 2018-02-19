import { Component, OnInit, Input } from '@angular/core';
import { Personnage } from 'app/feature/personnage/commun/personnage';

@Component({
  selector: 'feature-personnage-list',
  templateUrl: './personnage-liste.component.html',
  styleUrls: ['./personnage-liste.component.scss']
})
export class PersonnageListeComponent implements OnInit {
  @Input() liste: Personnage[];
  html: string = 'Component';
  constructor() { }

  ngOnInit() {
  }

}
