import {Component, EventEmitter, OnChanges, Output, SimpleChanges} from "@angular/core";
import {Router} from "@angular/router";
import {DataPassingService} from "../services/data-passing.service";

@Component({
  selector: 'cn-header',
  templateUrl:'./header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges{
    searchQuery: string = '';
    activeLink;
    @Output() open: EventEmitter<any> = new EventEmitter();
    constructor(private readonly router: Router, private data: DataPassingService){
      this.activeLink = window.location.pathname;
    }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  handleSearchKeyUp($event) {
    this.data.changeSearchQuery(this.searchQuery);
  }




}
