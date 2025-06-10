import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PopularComponent } from './home/popular/popular.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes:Routes = [
  // {path:'**',component:NotFoundComponent},
  {path:'', component:HomeComponent},
  // {path:'',redirectTo:'Home', pathMatch:'full'},
  {path:'Home', component:HomeComponent},
  {path:'About', component:AboutComponent},
  {path:'Contact', component:ContactComponent},
  {path:'Courses', component:CoursesComponent},
  // {path:'Courses/Course/:id', component:CourseDetailComponent},
  {path:'Courses', children:[
    {path:'Course/:id',component:CourseDetailComponent},
    {path:'popular',component:PopularComponent},
  ]},
  {path:'**',component:NotFoundComponent}, //WildCard route- always specified below all the routes
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes),//registering routes
  ],
  
 exports:[RouterModule],
})
export class RoutingModule { }
