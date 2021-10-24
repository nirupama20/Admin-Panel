import { Component, OnInit } from '@angular/core';
import { User } from '../model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(private userService:UserService) { }

  totalUsers:number=0
  ngOnInit(): void {
    this.gettotal();
  }
  gettotal(){
    this.userService.getAllUser().subscribe((data)=>{
        data.forEach((User)=>{
          this.totalUsers+=1;
        })
    })
  }
}
