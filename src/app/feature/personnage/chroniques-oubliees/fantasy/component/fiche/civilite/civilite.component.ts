import { Component, OnInit, Input } from '@angular/core';
import { Personnage } from 'app/feature/personnage/shared/personnage';

@Component({
  selector: 'feature-personnage-cof-fiche-civilite',
  templateUrl: './civilite.component.html',
  styleUrls: ['./civilite.component.scss']
})
export class CiviliteComponent implements OnInit {
  // @Input() personnage: Personnage;
  // Démo
  personnage = {
    'nom': 'Brutanus, le destructeur de fondements',
    'joueur': 'Anthony',
    'profils': ['Barbare', 'Magicien'],
    'niveau': 4,
    'race': 'Orc',
    'civilite' : {
      'sexe': 'Mâle',
      'age': 28,
      'taille': '1.95 m',
      'poids': '95 kg'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
