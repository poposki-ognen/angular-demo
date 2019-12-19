import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {InputComponent} from "./input/input.component";
import {HeaderComponent} from "./header/header.component";
import {RouterModule} from "@angular/router";
import {FilterService} from "./services/filter.service";
import {DataPassingService} from "./services/data-passing.service";
import {NotesService} from "./services/notes.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule
  ],
  declarations: [
    InputComponent,
    HeaderComponent,
  ],
  exports: [
    InputComponent,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    HeaderComponent,
    RouterModule,
  ],
  providers: [
    FilterService,
    DataPassingService,
    NotesService
  ]
})
export class SharedModule {}
