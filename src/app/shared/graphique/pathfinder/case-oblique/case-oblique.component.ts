import { Component, OnInit, Input } from '@angular/core';
import { Config } from 'protractor/built/config';

@Component({
  selector: 'shared-graphique-pathfinder-case-oblique',
  templateUrl: './case-oblique.component.html',
  styleUrls: ['./case-oblique.component.scss']
})
export class CaseObliqueComponent implements OnInit {
  @Input() titre: string;
  @Input() contenu: string;
  @Input() classe: string;
  @Input() isShort: boolean;

  constructor() { }

  ngOnInit() {
  }

}
