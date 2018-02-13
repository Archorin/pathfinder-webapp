import { Component, OnInit, Input } from '@angular/core';
import { Personnage } from 'app/feature/personnage/model/personnage';

@Component({
  selector: 'feature-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent implements OnInit {
  @Input() personnage: Personnage;
  constructor() { }

  ngOnInit() {
  }

}
