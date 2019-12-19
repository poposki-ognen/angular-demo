import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'cn-add-note',
  template: `
    <div (click)="goToNewNotePage()" class="card">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 min-vh-30 d-inline-block">
            <i class="far fa-calendar-plus"></i>
          </div>
        </div>
      </div>
    </div>`
})
export class AddNoteComponent {
  constructor(private readonly router: Router) {}
  goToNewNotePage() {
    this.router.navigate(['/note/add']);
  }
}
