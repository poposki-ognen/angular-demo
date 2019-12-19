import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  currentId = JSON.parse(localStorage.getItem('currentId')) || {id: 0};
  notes = {};
  constructor() {
   this.notes = this.getAllNotes();
    console.log(this.notes);
  }


  getAllNotes() {
    return JSON.parse(localStorage.getItem('notes')) || {};
  }

  getNoteById(noteId: number) {
    let notes = this.getAllNotes();
    return notes[noteId];
  }
  addNote(note) {
    let notes = this.getAllNotes();
    notes[note.id] = note;
    console.log(notes);
    localStorage.setItem('notes', JSON.stringify(notes));
  }
  deleteNote(noteId) {
    let notes = this.getAllNotes();
    delete notes[noteId];
    localStorage.setItem('notes', JSON.stringify(notes));
  }
  updateNote(note) {
    this.notes[note.id] = note;
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
  getCurrentId() {
    this.currentId.id = this.currentId.id + 1;
    localStorage.setItem('currentId', JSON.stringify(this.currentId));
    console.log(this.currentId.id);
    return this.currentId.id;
  }

  getAllNotesAsArray() {
    let notes = this.getAllNotes();
    const output = [];
    console.log(notes);
    for(let key in notes) {
      output.push(notes[key]);
    }
    console.log(output);
    return output;
  }


}
