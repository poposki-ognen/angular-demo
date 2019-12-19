import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Observable} from "rxjs";

@Component({
  selector: 'cn-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() inputType;
  @Output() outputValue = new EventEmitter<any>()
  inputValue: any;
  constructor(){}

  emitChange($event) {
    this.outputValue.emit($event)
  }

}
