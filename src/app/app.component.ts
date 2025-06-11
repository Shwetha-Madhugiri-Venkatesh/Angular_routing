import { Component, inject } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Routing';

  load_overlay:boolean=false;

  route:Router = inject(Router);
  ngOnInit(){
    this.route.events.subscribe((current_event)=>{
      if(current_event instanceof NavigationStart){
        this.load_overlay=true;
      }
      else if(current_event instanceof NavigationEnd|| current_event instanceof NavigationCancel|| current_event instanceof NavigationError){
        this.load_overlay=false;
      }
    })
  }
}
