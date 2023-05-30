import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = '';
  // newServerContent = '';

  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.serverCreated.emit({serverName: nameInput.value, serverContent: contentInput.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: contentInput.value});
  }

}
