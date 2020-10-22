import { Component, OnInit } from '@angular/core';
import {User} from "../../../Models/User"
import {UserService} from '../../services/user.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

   //properties
   users:User[]

  constructor(private userService:UserService) { }

  ngOnInit(): void {
      this.userService.getUsers().subscribe(users=>{
        console.log(users)
      })
  }

}
