import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: String[];

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }

  onSetToInActive(id: number){
    this.userService.setToInActive(id);
  }
}
