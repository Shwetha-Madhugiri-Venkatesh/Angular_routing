import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Resolve, Router, RouterEvent, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthorizeService } from "./Authorize.Service";
import { ContactComponent } from "../contact/contact.component";
import { Course } from "../Models/course";
import { CourseService } from "./course.service";

export interface Use_CanDeactivate{
    validate_navigation:()=>boolean|Observable<boolean>|Promise<boolean>;
}

@Injectable({
    providedIn:'root',
})
export class CanActivate_gaurd implements CanActivate, CanActivateChild, CanDeactivate<Use_CanDeactivate>, Resolve<Course[]>{
    authorize:AuthorizeService=inject(AuthorizeService);
    route:Router=inject(Router);
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean|Observable<boolean>|Promise<boolean>{
        if(this.authorize.isLogged){
            return true;
        }else{
            alert("please login for this service");
            this.route.navigate(['/Login']);
            return false;
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.canActivate(childRoute,state);
    }

    canDeactivate(component: ContactComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return component.validate_navigation();
    }
 course_service = inject(CourseService);
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Course[] | Observable<Course[]> | Promise<Course[]> {
        // let courses:Course[]=[];
        // this.course_service.getAllCourses().subscribe((data:Course[])=>{
        //     courses=data;
        // });
        // return courses;
        //since getAllCourses returns observable, which is asynchronous and takes time bcz of setTimeOut and control will go to the next line, it will not wait, it will run in background

        return this.course_service.getAllCourses();
    }
}