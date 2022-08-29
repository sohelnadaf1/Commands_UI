import { Component } from '@angular/core';
import { Commands } from './Commands';
import { CommandsService } from './commands.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "this is api call"

  commands:any;
 constructor (private _Commands:CommandsService)
 {
  _Commands.GetCommands().subscribe((data)=>
  {
    console.warn(data);
    this.commands = data;
  }
  );
  
 }

}
