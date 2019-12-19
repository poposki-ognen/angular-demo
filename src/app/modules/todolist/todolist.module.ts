import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {NoteListComponent} from "./components/note-list/note-list.component";
import {NoteComponent} from "./components/note/note.component";
import {AddNoteComponent} from "./components/add-note/add-note.component";
import {ViewNoteComponent} from "./components/view-note/view-note.component";
import {CreateNoteComponent} from "./components/create-note/create-note.component";
import {AllNotesComponent} from "./pages/all-notes-page/all-notes.component";
import {CreateNotePageComponent} from "./pages/create-note-page/create-note-page.component";
import {EditNotePageComponent} from "./pages/edit-note-page/edit-note-page.component";

@NgModule({
  imports: [SharedModule],
  declarations: [
    NoteListComponent,
    NoteComponent,
    AddNoteComponent,
    ViewNoteComponent,
    CreateNoteComponent,
    AllNotesComponent,
    CreateNotePageComponent,
    EditNotePageComponent
  ]
})

export class TodoListModule {}
