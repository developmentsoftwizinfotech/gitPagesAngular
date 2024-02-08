import { Component, OnInit } from '@angular/core';
import { userObj } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: userObj[] = [];
 
  constructor() {

  }

  ngOnInit(): void {

    const records = localStorage.getItem('userList');
    if (records !== null) {
      const recordList = JSON.parse(records);
      const filterRecords = recordList.filter((value: any) => value.range >= 29 && value.range <= 61);
      this.userList = filterRecords

    }
  }
  onDelete(id: any) {
    const oldRecords = localStorage.getItem('userList');
    if (oldRecords !== null) {
      const userList = JSON.parse(oldRecords);
      userList.splice(userList.findIndex((index: any) => index.userId == id), 1)

      localStorage.setItem('userList', JSON.stringify(userList));
    }
    const records = localStorage.getItem('userList');
    if (records !== null) {

      this.userList = JSON.parse(records);

    }
  }


}
