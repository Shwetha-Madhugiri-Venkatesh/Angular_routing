import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent{
  course_selected:Course;
  selected_id:number;
  course_service = inject(CourseService);
  active_route:ActivatedRoute=inject(ActivatedRoute);
  route_observable;
  ngOnInit(){
    // this.selected_id = this.active_route.snapshot.params['id'];//returns number
    // this.selected_id = +this.active_route.snapshot.paramMap.get('id'); //returns string
    this.route_observable = this.active_route.params.subscribe((data)=>{
      this.selected_id = +data['id'];//here params rrturns the parameters defined in the router
      this.course_selected = this.course_service.courses.find(course => course.id===this.selected_id);
    })
    // this.active_route.paramMap.subscribe((data)=>{
    //   this.selected_id = +data.get('id');//here params rrturns the parameters defined in the router
    //   this.course_selected = this.course_service.courses.find(course => course.id===this.selected_id);
    // })
  }

  ngOnDestroy(){
    this.route_observable.unsubscribe();
  }
}
