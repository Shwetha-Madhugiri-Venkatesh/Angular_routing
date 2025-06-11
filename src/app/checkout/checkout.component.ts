import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Models/course';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  active_route:ActivatedRoute = inject(ActivatedRoute);
  route:Router = inject(Router);
  course;
  ngOnInit(){
    // this.active_route.data.subscribe((data)=>{
    //   this.course = data;
    // });
    // // let course = this.active_route.snapshot.data['data']
    // console.log(this.course);

    // this.course = this.route.getCurrentNavigation().extras.state;
    this.course=history.state;
  }
}
