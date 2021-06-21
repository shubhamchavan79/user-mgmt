import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManagementService } from 'src/app/services/authenticate/session-management.service';
import { IUser } from 'src/app/user/models/user/user.model';
import { UserService } from 'src/app/user/services/api/user.service';
import { AccountManagementService } from '../services/account-management.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  // Form model
  signUpFormParams = {} as IUser;

  // Sign up server error
  isServerError = false;

  // Sign up server message
  errorMessage = '';

  constructor(private service: AccountManagementService, private session: SessionManagementService, private router: Router) { }

  ngOnInit(): void {
    if(this.session.isAuthenticated()) {
      this.router.navigate(['/user/list']);
    }
  }

  onSubmit(form: any){

    this.isServerError = false;
    this.errorMessage = '';
    
    this.service.register(this.signUpFormParams).subscribe((response)=>{
      this.session.setSession(response);
      this.router.navigate(['/user/list'])
    },(error)=>{
      console.log(error)
      this.isServerError = true;
      this.errorMessage = error.error.error;
    })
  }

}
