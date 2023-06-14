import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{

  users: String[];

  ngOnInit() {
    this.users = this.userService.inactiveUsers
  }

  constructor(private userService: UsersService) {

  }

  onSetToActive(id: number) {
    this.userService.SetToActive(id);
  }
}
