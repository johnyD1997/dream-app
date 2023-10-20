import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-username-check',
  templateUrl: './username-check.component.html',
  styleUrls: ['./username-check.component.css']
})
export class UsernameCheckComponent {
    userName = 'test';
    
    clearUserName(){
      this.userName = ''
    }
}
