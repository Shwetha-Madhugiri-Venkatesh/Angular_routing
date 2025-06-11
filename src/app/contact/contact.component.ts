import { Component } from '@angular/core';
import { Use_CanDeactivate } from '../Services/CanActivate_routeGuard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements Use_CanDeactivate{
  firstName:string='';
  lastName:string='';
  country:string='';
  message:string='';
  is_submitted_flag:boolean=false;
  isSubmitted(){
    this.is_submitted_flag=true;
  }

  validate_navigation(){
    console.log(this.is_submitted_flag);
    if((this.firstName||this.lastName||this.message||this.country)&&!this.is_submitted_flag){
      return confirm("Do you really want to navigate");
    }else{
      return true;
    }
  }
}
