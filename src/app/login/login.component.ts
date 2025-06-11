import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AuthorizeService } from '../Services/Authorize.Service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('username') username:ElementRef;
  @ViewChild('password') password:ElementRef;
  authorize = inject(AuthorizeService);
  route:Router=inject(Router);
  active_route = inject(ActivatedRoute);
  Authorising_login_credentials(){
    const username_val=this.username.nativeElement.value;
    const password_val=this.password.nativeElement.value;
    let result = this.authorize.login(username_val,password_val);
    if(result){
      // alert("Hi User!");
      this.route.navigate(['/Courses']);
    }else{
      alert("The credentials are wrong!");
    }
  }
  ngOnInit(){
    const logout= this.active_route.snapshot.queryParams['logout'];
    if(logout){
      alert('You are logged out!');
      this.route.navigate(["Login"]);
    }
  }
}
