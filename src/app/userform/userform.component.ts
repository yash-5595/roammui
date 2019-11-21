import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  longUIquestion:string;
  constructor() { }

  ngOnInit() {
  }
  submit(){
    console.log(this.longUIquestion)
  }
}
