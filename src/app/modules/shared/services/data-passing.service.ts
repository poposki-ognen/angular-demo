import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataPassingService {

  private searchQuery = new BehaviorSubject('');
  currentQuery = this.searchQuery.asObservable();
  constructor(){

  }
  changeSearchQuery(message: string) {
    this.searchQuery.next(message);
  }
}

