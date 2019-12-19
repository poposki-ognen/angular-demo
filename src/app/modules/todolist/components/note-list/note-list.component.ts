import {Component, OnInit} from "@angular/core";
import {FilterService} from "../../../shared/services/filter.service";
import {DataPassingService} from "../../../shared/services/data-passing.service";
import {NotesService} from "../../../shared/services/notes.service";

@Component({
  selector: 'cn-list',
  styleUrls: ['./note-list.component.scss'],
  templateUrl: './note-list.component.html'
})
export class NoteListComponent implements OnInit{
  shownNotes = [];
  notes = [];
  constructor(private filterService: FilterService, private data: DataPassingService, private notesService: NotesService) {
    this.notes = notesService.getAllNotesAsArray();

    this.shownNotes = this.notes;
  }

  ngOnInit() {
    this.data.currentQuery.subscribe(query => {
      this.shownNotes = this.filterService.performFilter(this.notes, query);
    })
  }
  handleDelete(){
    "HANDLING DELETE"
    this.notes = this.notesService.getAllNotesAsArray();
    this.shownNotes = this.notes;
    console.log("blabla");
  }


}
