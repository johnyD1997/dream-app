import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent {
  active = true;
  arrayOFClicks: number[] = [];

  onChangesActive() {
    this.active = !this.active;
    this.arrayOFClicks.push(this.arrayOFClicks.length + 1);
  }

  getBGColor() {
    return this.arrayOFClicks.length > 4 ? 'black' : 'white';
  }

}
