import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserServiceService {
  public users$: BehaviorSubject<string[]> = new BehaviorSubject([]);

  public addUser$(value) {
    this.users$.value.push(value);
  }

  constructor() {}
}
