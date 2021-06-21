import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManagementService } from 'src/app/services/authenticate/session-management.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { AccountManagementService } from '../services/account-management.service';

interface ILogin {
  email: string,
  password: string
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  // Form data model
  loginFormParams = {} as ILogin ;

  // Login server error
  isLoginServerError = false;

  // Login server message
  errorMessage = '';

  constructor(private router: Router, private api: AccountManagementService, private session: SessionManagementService, private toast: ToasterService) { }

  ngOnInit(): void {
    if(this.session.isAuthenticated()) {
      this.router.navigate(['/user/list']);
    }
  }

  onSubmit(form: any){
   
    this.isLoginServerError = false;
    this.errorMessage = '';
    
    // Login api call
    this.api.login(form.value).subscribe((response)=>{

      this.session.setSession(response);
      this.router.navigate(['/user/list'])

    }, (error)=>{
      this.isLoginServerError = true;
      this.errorMessage = error.error.error;
    });
  }

}
