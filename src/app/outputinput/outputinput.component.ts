import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outputinput',
  templateUrl: './outputinput.component.html',
  styleUrls: ['./outputinput.component.scss']
})
export class OutputinputComponent implements OnInit {

  @Input() value: number;
  @Output() emitPass: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  passBall() {
    this.emitPass.emit();
  }
}
