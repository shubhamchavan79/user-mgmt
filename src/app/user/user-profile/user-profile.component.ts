import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { IUser } from '../models/user/user.model';
import { UserService } from '../services/api/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserDetailsComponent implements OnInit {

  id:any;

  // Form model
  userFormParams = {} as IUser;

  // Flag
  isUpdate = false; 
 
  // Server error
  isServerError = false;

  // Server message
  errorMessage = '';

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private service: UserService, private toast: ToasterService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.getUserDetails(this.id).subscribe((response: any)=>{
      this.userFormParams = response.data;
    },(error)=>{
      this.route.navigate(['/user/list'])
    })
  }

  onSubmit(form: any){

    this.isServerError = false;
    this.errorMessage = '';
    
    this.service.updateUser(this.id, this.userFormParams).subscribe((response)=>{
      this.isUpdate = false;
      // this.isServerError = true;
      // this.errorMessage = 'User updated successfully';
      this.toast.sendMessage('User updated successfully', true);
    },(error)=>{
      this.isUpdate = true;
      this.isServerError = true;
      this.errorMessage = 'User not updated. Something went wrong';
    })
  }

  onDelete(){

    this.isServerError = false;
    this.errorMessage = '';

    this.service.deleteUser(this.id).subscribe((response)=>{
      this.toast.sendMessage('User deleted successfully', true);
      this.route.navigate(['/user/list']);
    },(error)=>{
      this.isServerError = true;
      this.errorMessage = 'User not deleted. Something went wrong';
    })
  }

  openModal(content: any): void {
    
    const modal = this.modalService.open(content, {
      ariaLabelledBy: 'modal-primary-title',
      backdrop: 'static',
      size: 'sm',
      centered: true,
      windowClass: 'modal-width',
      backdropClass: 'modal-backdrop'
    });

    modal.result.then(()=>{
      this.onDelete();
    }).catch(()=>{
      console.log('Dismissed');
    });

  }

}
