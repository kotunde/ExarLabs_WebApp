import { Component, OnInit } from '@angular/core';
import { User } from '../core/model/user.model';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe((data) => {
      this.users = data;
      console.log('data', data);
    });
  }

}
