import { Component } from '@angular/core';
import {timestamp} from "rxjs";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  allowNewServer = false;
  serverCreationStatus = "Server is not created";
  serverName = "TestServer";
  serverCreated = false;
  servers = ['TestServer1','TestServer2']

  userName = "";
  allowUserNameReset = false;

  secretContent = 'password = "tuna"'
  log = [];
  showSecret = false;

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    },3000)
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server is created! Name is: " + this.serverName;
  }

  onUpdateServerName($event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUserName(){
    this.userName = "";
    this.allowUserNameReset = false;
  }

  enableResetUserName(){
    if(this.userName != null){
      this.allowUserNameReset = true
    }
  }

  logToggleDetails() {
    this.log.push(new Date());
  }
}
