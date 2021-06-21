import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {

  public subscription: Subscription;
  public action: string = '';
  public showToaster: boolean = false;
  public className: string = '';
  public delay: number = 1000; 

  constructor(private service: ToasterService) { }

  ngOnInit(): void {

    this.subscription = this.service.getMessage().subscribe((message) => {
      this.action = message.message;
      if (message.isSuccessMsg) {
        this.className = 'bg-success text-light cust-toast';
        this.showToaster = true;
      } else {
        this.className = 'bg-danger text-light cust-toast';
        this.showToaster = true;
      }
    });

  }

  close() {
    this.showToaster = false;
  }

}
