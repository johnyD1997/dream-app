import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template:  `<section>
  <h1>Im in the Servers Component</h1>
  <p>Below this i have 2 Server Components</p>
  <app-server></app-server>
  <app-server></app-server>
</section>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
