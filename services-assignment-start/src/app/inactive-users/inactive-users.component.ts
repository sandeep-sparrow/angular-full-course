import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{

  users: String[];

  constructor(private userService: UsersService) {
  }
  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }
}
