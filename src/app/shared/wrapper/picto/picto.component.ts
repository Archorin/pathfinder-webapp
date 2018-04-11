import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

const associationPictos = {
  // Font Awesome pictos
  'double-chevron-gauche': 'fa-angle-double-left',
  'checkbox': 'fa-square-o',
  'checkbox-checked': 'fa-check-square-o',
  'edition-pencil': 'fa-pencil-square-o'
};

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'picto',
  templateUrl: './picto.component.html',
  styleUrls: ['./picto.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PictoComponent implements OnInit {
  @Input() libelle: string;
  classe: string;
  constructor() { }

  ngOnInit() {
    this.classe = associationPictos[this.libelle];
  }
}
