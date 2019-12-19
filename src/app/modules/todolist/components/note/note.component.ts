import {AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";
import {NotesService} from "../../../shared/services/notes.service";

@Component({
  selector: 'cn-note',
  templateUrl:'./note.component.html',
  styles:[]
})
export class NoteComponent implements AfterViewInit, OnChanges{
  @Input() note;
  @Output() delete = new EventEmitter<boolean>();
  constructor(private readonly notesService: NotesService) {
  }

  ngAfterViewInit(): void {
    console.log(this.note)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  deleteNote(id){
    console.log("deleting");
    this.notesService.deleteNote(id);
    this.delete.emit(true)
  }

}
