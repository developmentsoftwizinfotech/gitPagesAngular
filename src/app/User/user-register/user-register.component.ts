
import { userObj } from 'src/app/interfaces/user';
import { Component, DebugElement, OnInit } from '@angular/core';

import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  userObj: userObj;

  ngForm: FormGroup | any;
  constructor() {
    this.userObj = new userObj();
  }


  ngOnInit(): void {
    this.ngForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null),
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'range': new FormControl(null, [Validators.required, Validators.pattern("^0*(?:[1-9][0-9]?|100)$")]),

    });
  }

  getLatestUserID() {
    var userId: number = 1;
    var oldRecords = localStorage.getItem('userList');
    if (oldRecords !== null) {
      var userList = JSON.parse(oldRecords)
      if (userList.length > 0) {
        userId = userList[userList.length - 1].id + 1;
      }
    }
    return userId;
  }

  validateAllFormFields(formGroup: FormGroup) {
    debugger;
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  onSubmit() {
    debugger;
    this.userObj.id = this.getLatestUserID();
    const oldRecords = localStorage.getItem('userList');
    if (this.ngForm.valid) {
      if (oldRecords !== null) {
        const userList = JSON.parse(oldRecords);
        userList.push(this.userObj);
        localStorage.setItem('userList', JSON.stringify(userList));
        alert("Record save local Storage Successfully")
        this.ngForm.reset();
      } else {

        const userArr = [];
        userArr.push(this.userObj);
        localStorage.setItem('userList', JSON.stringify(userArr));
        alert("Record save local Storage Successfully")
        this.ngForm.reset();
      }


    } else {
      alert("Please fill all required field");
      this.validateAllFormFields(this.ngForm); 

    }





  }


}
