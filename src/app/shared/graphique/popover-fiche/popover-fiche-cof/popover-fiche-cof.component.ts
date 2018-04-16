import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { VariableAst } from '@angular/compiler';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'popover-fiche-cof',
  templateUrl: './popover-fiche-cof.component.html',
  styleUrls: ['./popover-fiche-cof.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopoverFicheCofComponent implements OnInit {
  // @Input() sujet: string;
  // @Input() message: string;


  constructor() { }

  ngOnInit() {
  }

}
