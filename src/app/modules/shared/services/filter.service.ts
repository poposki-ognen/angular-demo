import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  constructor() {}

  performFilter<T>(list: any[], filterBy: string | null): T[] {
    if (filterBy) {
      filterBy = filterBy.toLocaleLowerCase();
      return list.filter((item: T) =>
        Object.keys(item).some(prop => {
          let value = item[prop];
          if (typeof value === "string") {
            value = value.toLocaleLowerCase();
          }
          return value.toString().indexOf(filterBy) !== -1;
        })
      );
    } else {
      return list;
    }
  }
}
