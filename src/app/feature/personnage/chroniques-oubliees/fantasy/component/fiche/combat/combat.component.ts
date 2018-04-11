import { Component, OnInit } from '@angular/core';
import { PopoverModule } from 'ngx-bootstrap/popover';

@Component({
  selector: 'feature-personnage-cof-fiche-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent implements OnInit {
  // Démo
  caracteristique = {
    'force': 14,
    'constitution': 8,
    'sagesse': 12,
    'dexterite': 14,
    'intelligence': 13,
    'charisme': 11
  };
  personnage = {
    'niveau': 4
  };

  constructor() { }

  ngOnInit() {
  }

}
