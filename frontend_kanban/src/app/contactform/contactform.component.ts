import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public myalert(name: string, surname: string, email:string, message:string) {
    if(name!="" && surname!="" && email!="" && message!="")
    {
      alert("Thank you " + name + " " + surname + ".\n " +
        "Your message has been sent.");
      }
  }
}
