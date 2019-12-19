import {Component, OnChanges, SimpleChanges} from "@angular/core";
import {NotesService} from "../../../shared/services/notes.service";
import {Router} from "@angular/router";

@Component({
  selector:'cn-create-note',
  templateUrl:'./create-note.component.html',
  styleUrls:['./create-note.component.scss']
})
export class CreateNoteComponent implements OnChanges{
  note = {
    id: -1,
    title: '',
    items: []
  };
  errorState = false;
  constructor(private notesService: NotesService, private router: Router){
    this.note.id = this.notesService.getCurrentId();
  }
  addToDo() {
    if(!this.note.items.length || this.note.items[this.note.items.length - 1].title != '') {
      this.note.items.push({
        title: '',
        checked: false
      })
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.errorState = false;
  }

  detectChange() {
    this.errorState = false;
  }
  deleteToDo(index) {
    console.log(index);
    this.note.items.splice(index, 1)
  }
  saveAndGoToHomepage() {
    if(!this.note.title || !this.note.items.length || this.note.items[this.note.items.length - 1].title == '') {
      this.errorState = true;
      return;
    }
    this.notesService.addNote(this.note);
    this.router.navigate(['/']);
  }
}
