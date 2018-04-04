import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-graphique-chronique-oubliees-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {
  @Input() classe: string;
  @Input() headerFiligrane: string;
  @Input() header: string;
  @Input() body: string;
  @Input() bodyFiligrane: string;
  @Input() content: string;
  @Input() footer: string;
  @Input() footerFiligrane: string;

  constructor() { }

  ngOnInit() {
  }

}
