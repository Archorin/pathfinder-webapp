import { Component, OnInit, Input } from '@angular/core';
import { Personnage } from '../personnage';

@Component({
  selector: 'feature-personnage-list',
  templateUrl: './personnage-list.component.html',
  styleUrls: ['./personnage-list.component.css']
})
export class PersonnageListComponent implements OnInit {
  @Input() liste: Personnage[];
  html: string = 'Component';
  constructor() { }

  ngOnInit() {
  }

}
