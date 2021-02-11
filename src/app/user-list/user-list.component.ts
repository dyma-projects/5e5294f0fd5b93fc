import { Component, OnInit } from "@angular/core";
import { UserServiceService } from "../shared/services/user-service.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  public users: string[];

  constructor(private usersService: UserServiceService) {}

  ngOnInit() {
    this.usersService.users$.subscribe((users: string[]) => {
      this.users = users;
    });
  }
}
