import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  coursesService = inject(CourseService);
  AllCourses: Course[];
  query_inp: string = '';
  active_route: ActivatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    // this.query_inp = this.active_route.snapshot.queryParamMap.get('search');
    // if(this.query_inp==undefined||this.query_inp==null||this.query_inp==''){
    //   this.AllCourses=this.coursesService.courses;
    // }else{
    // console.log(this.query_inp);
    // this.AllCourses = this.coursesService.courses.filter(course=>course.title.toLocaleLowerCase().includes(this.query_inp.toLowerCase()));
    // }
    console.log( this.active_route.queryParamMap);
    this.active_route.queryParamMap.subscribe((data) => {
      this.query_inp = data.get('search');
      // console.log(this.query_inp);
      // this.AllCourses = this.coursesService.courses.filter(course=>course.title.toLocaleLowerCase().includes(this.query_inp.toLowerCase()));
      if (this.query_inp == undefined || this.query_inp == null || this.query_inp == '') {
        // this.coursesService.getAllCourses().subscribe((data:Course[])=>{
        //   this.AllCourses=data;
        // });
        this.AllCourses = this.active_route.snapshot.data['courses'];
        // this.active_route.data.subscribe((data)=>{
        //   this.AllCourses = data;
        // })
      } else {
        console.log(this.query_inp);
        this.AllCourses = this.coursesService.courses.filter(course => course.title.toLocaleLowerCase().includes(this.query_inp.toLowerCase()));
      }
    })
    console.log( this.active_route.queryParamMap);
  }
}
