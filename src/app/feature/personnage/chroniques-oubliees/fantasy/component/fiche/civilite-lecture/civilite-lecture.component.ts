import { Component, OnInit, Input } from '@angular/core';
import { Personnage } from 'app/feature/personnage/shared/personnage';

@Component({
  selector: 'feature-personnage-cof-fiche-civilite-lecture',
  templateUrl: './civilite-lecture.component.html',
  styleUrls: ['./civilite-lecture.component.scss', '../fiche.shared.scss']
})
export class CiviliteLectureComponent implements OnInit {
  @Input() personnage: Personnage;
  constructor() { }

  ngOnInit() {
  }

}
