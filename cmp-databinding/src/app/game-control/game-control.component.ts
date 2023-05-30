import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  interval : any;
  @Output('intervalFired') gameStared = new EventEmitter<number>();
  i: number = 0;

  onStartGame() {
    this.interval = setInterval(() => {
      this.gameStared.emit(this.i + 1);
      this.i++
    }, 1000)
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}
