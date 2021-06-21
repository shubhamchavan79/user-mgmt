import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SessionManagementService } from './services/authenticate/session-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'user_mgmt';
  isShow = false;

  constructor(private route: Router, private session: SessionManagementService){ }

  ngOnInit() {

    // this.route.events.subscribe((event: any) => {
    //   if (event instanceof NavigationEnd) {
    //     if (event.url === '/account/signin' || event.url === '/account/signup') {
    //       this.isShow= false;
    //     } else {
    //       this.isShow= true;
    //     }
    //   }
    // });

  }

}
