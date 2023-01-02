import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  canClick: boolean = true;

  text: string = 'Still far away !';

  enableDisableButtonLabel: string = 'Disable buttom';

  counterValue: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  enableDisable(): void {
    this.canClick = !this.canClick;
    if (this.enableDisableButtonLabel == 'Disable button') {
      this.enableDisableButtonLabel = 'Enable button';
    }
    else {
      this.enableDisableButtonLabel = 'Disable button';
    }
  }

  sayMessage(): void {
    this.counterValue++;
    alert(this.text);
  }

  title = 'kanban-app';

  message = "It's running and working";

  
}
