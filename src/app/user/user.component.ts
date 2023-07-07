import { Component, OnInit } from '@angular/core';
import { UserService } from '../usersrv.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
// export class UserComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

export class UserComponent implements OnInit {

  users = new Array<any>();
  
  constructor(public userService: UserService) { }
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
        this.users = response.data;
        console.log('Checunya is getting the following users:', this.users)
    });
  }
  
}
