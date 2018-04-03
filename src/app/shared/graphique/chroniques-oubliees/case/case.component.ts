import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-graphique-chronique-oubliees-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {
  @Input() classe: string;
  @Input() header: string;
  @Input() body: string;
  @Input() content: string;
  @Input() footer: string;

  constructor() { }

  ngOnInit() {
  }

}
