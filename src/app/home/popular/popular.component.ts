import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  courseService = inject(CourseService)
  popularCourses: Course[] = [];
  router:Router=inject(Router);
  activeRouter:ActivatedRoute=inject(ActivatedRoute);

  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }

  navigate_to_courses(){
    //this.router.navigate(['Courses']);
    this.router.navigateByUrl('Courses');
    //By default, for both the methods, arguement is absolute path.
    //If u want relative, u must try only navigate() not the navigateUrl()
    //this.router.navigate(['Courses'], {relativeTo:this.activeRouter});
  }
}
