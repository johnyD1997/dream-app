import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  searchString: string = '';
  
  constructor() { }

  ngOnInit(): void {
 
  }

}
