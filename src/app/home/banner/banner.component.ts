import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @ViewChild('searchVar') inp:ElementRef;
  inpval:string='';
  // ngAfterViewInit(){
  //   this.inpval=this.inp.nativeElement.value;
  // }
  router:Router=inject(Router);
  navigate_to_course(val:string){
    this.router.navigate(['Courses'],{queryParams:{'search':val}});
  }
}
