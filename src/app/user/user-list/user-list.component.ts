import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserData } from '../models/user/user.model';
import { UserService } from '../services/api/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userData = {} as IUserData;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private service: UserService) { }

  ngOnInit() {

    this.activatedRoute.data.subscribe((response)=>{
      this.userData = response.userList;
    });

  }

  userDetails(id: number) {
    this.router.navigate(['/user/',id])
  }

  getMoreUsers() {
    this.service.getUserList(this.userData.page, this.userData.per_page).subscribe((response: IUserData)=>{
      this.userData = response;
    })
  }

  previous() {
    this.userData.page--;
    this.getMoreUsers();
  }

  next() {
    this.userData.page++;
    this.getMoreUsers();
  }

  perPage(i: number) {
    return new Array(i);
  }

  onChange() {
    this.userData.page = 1;
    this.getMoreUsers();
  }

}
