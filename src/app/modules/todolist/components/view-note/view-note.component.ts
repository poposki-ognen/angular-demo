import {Component, OnInit} from "@angular/core";
import {NotesService} from "../../../shared/services/notes.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'cn-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.scss']
})
export class ViewNoteComponent implements OnInit{
  note;
  editState = -1;
  constructor(private noteService: NotesService, private readonly route: ActivatedRoute){
  }
  ngOnInit(): void {
    let currentNoteId = this.route.snapshot.params['id'];
    this.note = this.noteService.getNoteById(parseInt(currentNoteId));
  }
  updateNote(i) {
    this.editState = -1;
    this.noteService.updateNote(this.note);
  }
  deleteNote(i) {
    console.log("asdasdasd");
    if(this.note.items.length > 1) {
      this.note.items.splice(i,1);
      console.log("asdasd");
      this.noteService.updateNote(this.note);
    }

  }
}
