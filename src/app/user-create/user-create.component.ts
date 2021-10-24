import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userForm:FormGroup
  constructor(private userService:UserService,private router:Router) {
    this.userForm = new FormGroup({
      'Name': new FormControl('', Validators.required),
      'DOB': new FormControl('', Validators.required),
      'Skills': new FormControl('', Validators.required),
      'Department': new FormControl('', Validators.required),
      'Country' : new FormControl('', Validators.required),
      'State' : new FormControl('', Validators.required),
      'City' : new FormControl('', Validators.required),
      'Address line 1' : new FormControl('', Validators.required),
      'ZipCode' : new FormControl('', Validators.required),
    })

  }

  ngOnInit(): void {

  }

  submitUser(){
    Object.keys(this.userForm.controls).forEach(field => {
      const control = this.userForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.userService.saveUser(this.userForm.value).subscribe(() => {
        this.router.navigate(['/user-list'])
      },() => {
        alert("Something Went Wrong")
      })
      
    }
  }

  

}
