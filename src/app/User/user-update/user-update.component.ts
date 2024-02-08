import { userObj } from 'src/app/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  userObj: userObj;

  constructor(private route: ActivatedRoute) {
    this.userObj = new userObj();
    this.route.queryParams.subscribe(
      (result) => {
        this.userObj.id = result['allowEmpId']
      });
  }

  ngOnInit(): void {
debugger;
    var oldRecords = localStorage.getItem('userList');
    if (oldRecords !== null) {
      var userlist = JSON.parse(oldRecords)

      var currentUser = userlist.find(
        (findUser: any) => findUser.id == this.userObj.id)
      if (currentUser !== undefined) {
        this.userObj.id = currentUser.id;
        this.userObj.title = currentUser.title;
        this.userObj.email = currentUser.email;
        this.userObj.description = currentUser.description;
        this.userObj.range = currentUser.range;
      
      }
    }
  }

  getLatestUserID() {

    var userId = 1;
    var oldRecords = localStorage.getItem('userList');
    if (oldRecords !== null) {
      var userList = JSON.parse(oldRecords)
      if (userList.length > 0) {
        userId = userList[userList.length - 1].id + 1;
      }
    }
    return userId;
  }
  onUpdate() {



    const oldRecords = localStorage.getItem('userList');
    if (oldRecords !== null) {
      const userlist = JSON.parse(oldRecords)

      const currentUser = userlist.find(
        (findUser: any) => findUser.id == this.userObj.id)
      if (currentUser !== undefined) {
        currentUser.title = this.userObj.title;
        currentUser.email = this.userObj.email;
        currentUser.description = this.userObj.description;
        currentUser.range = this.userObj.range;
       
      }
      localStorage.setItem('userList', JSON.stringify(userlist));
    }

  }
}
