import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../../user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User;
  //success: boolean = false;

  constructor(private service: UserService){
    this.user = new User();
  }

  ngOnInit(): void { 
  } 

  onSubmit(){
    this.service
    .createUser(this.user)
    .subscribe(response => {
      console.log(response);
      //this.success = true;
    })
  }
}
