import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ToasterComponent } from './toaster/toaster.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    LoaderComponent,
    ToasterComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    LoaderComponent,
    ToasterComponent
  ]
})
export class SharedModule { }
