import { Component } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InbuiltDirectiveDemo';

  servers: Server[] = [];

  constructor() {
    let server: Server;
    for (let i= 1; i <= 10; i++) {
      server = new Server('Server Name - '+ i, i);
      this.servers.push(server);
    }
    console.log(this.servers.length);
  }


  checkCount(index){
    console.log(" Index " + index + " : mod = " + index % 2);
    return (index % 2 ? true : false);

  }

}
