import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'feature-personnage-cof-fiche-vitalite',
  templateUrl: './vitalite.component.html',
  styleUrls: ['./vitalite.component.scss']
})
export class VitaliteComponent implements OnInit {
  // Démo
  personnage = {
    'niveau': 4,
    'DV': 'd8',
    'PVmax': 42,
    'PVactuel': 28
  };

  constructor() { }

  ngOnInit() {
  }

}
