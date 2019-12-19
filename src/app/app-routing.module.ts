import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoteListComponent} from "./modules/todolist/components/note-list/note-list.component";
import {CreateNotePageComponent} from "./modules/todolist/pages/create-note-page/create-note-page.component";
import {EditNotePageComponent} from "./modules/todolist/pages/edit-note-page/edit-note-page.component";


const routes: Routes = [
  { path: '', component: NoteListComponent },
  { path: 'note/add', component: CreateNotePageComponent },
  { path: 'note/:id', component: EditNotePageComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
