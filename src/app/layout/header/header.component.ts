import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionManagementService } from 'src/app/services/authenticate/session-management.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(private route: Router, private session: SessionManagementService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.session.isLoggedIn;
  }

  logout(){
    this.session.clearSessoion();
    this.route.navigate(['/account/signin']);
  }

}
