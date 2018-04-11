import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'feature-personnage-cof-fiche-caracteristique',
  templateUrl: './caracteristique.component.html',
  styleUrls: ['./caracteristique.component.scss']
})
export class CaracteristiqueComponent implements OnInit {
  // Démo
  caracteristique = {
    'force': 14,
    'constitution': 8,
    'sagesse': 12,
    'dexterite': 14,
    'intelligence': 13,
    'charisme': 11
  };

  constructor() { }

  ngOnInit() {}

}
