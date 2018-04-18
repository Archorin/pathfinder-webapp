import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

const availableDictionnary = {
  // Font Awesome pictos
  'double-chevron-gauche': 'fa-angle-double-left',
  'checkbox': 'fa-square-o',
  'checkbox-checked': 'fa-check-square-o',
  'edition-pencil': 'fa-pencil-square-o',
  'menu-configurations': 'fa-cogs',
  'menu-configuration': 'fa-cog',
  'menu-navigation': 'fa-bars'
};

const availableOptions = {
  // size
  'large': 'fa-lg', // 33% increase
  '2x': 'fa-2x',
  '3x': 'fa-3x',
  '4x': 'fa-4x',
  '5x': 'fa-5x',
  // animate
  'spin': 'fa-spin',
  'pulse': 'fa-pulse',
  'rotate-90': 'fa-rotate-90',
  'rotate-180': 'fa-rotate-180',
  'rotate-270': 'fa-rotate-270',
  'flip-horizontal': 'fa-flip-horizontal',
  'flip-vertical': 'fa-flip-vertical',
  // Rajouter le mixin de rotation libre sur la base de fa-rotate-* et fa-flip-*
  // other
  'fixed-width': 'fa-fw',
  'right': 'fa-pull-right',
  'left': 'fa-pull-left',
  'border': 'fa-border',
  'list': 'fa-li'
};

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'picto',
  templateUrl: './picto.component.html',
  styleUrls: ['./picto.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PictoComponent implements OnInit {
  @Input() libelle: string = '';
  @Input() options: string[] = [];
  classes: string;
  constructor() { }

  ngOnInit() {
    const options = this.defineOptions(this.options);
    let classes = availableDictionnary[this.libelle];
    if (this.options.length > 0) {
      classes += ' ' + options.join(' ');
    }

    this.classes = classes;
  }

  private defineOptions(options: string[]) {
    const fontAwesomeClasses: string[] = [];
    options.forEach((key, option) => {
      fontAwesomeClasses.push(availableOptions[key]);
    });

    return fontAwesomeClasses;
  }
}
