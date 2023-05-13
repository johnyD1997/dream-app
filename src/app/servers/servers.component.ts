import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'testServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.servers.push(this.serverName)
    this.serverCreated = true;
    return (this.serverCreationStatus =
      'Server was created!Server name is ' + this.serverName);
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
