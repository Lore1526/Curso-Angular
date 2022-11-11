import { Router } from '@angular/router';
import { Student } from './../student/student';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../login/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router : Router, private userService:UserService ) { }

  ngOnInit(): void {
  }

  logOut = () =>{
    this.userService.logOut();
    this.router.navigate(["/login"]);
  }
}
