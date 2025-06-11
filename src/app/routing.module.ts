import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PopularComponent } from './home/popular/popular.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { canActivate_gaurd, canActivateChild_guard, child_canActivate, canDeactivate } from './canActivate_guard';
import { CanActivate_gaurd } from './Services/CanActivate_routeGuard.service';


const routes:Routes = [
  // {path:'**',component:NotFoundComponent},
  {path:'', component:HomeComponent},
  // {path:'',redirectTo:'Home', pathMatch:'full'},
  {path:'Home', component:HomeComponent},
  {path:'About', component:AboutComponent},
  {path:'Contact', component:ContactComponent, canDeactivate:[CanActivate_gaurd]},
//   {path:'Contact', component:ContactComponent, canDeactivate:[canDeactivate]},
   {path:'Courses', component:CoursesComponent, resolve:{courses:CanActivate_gaurd}},
//   {path:'Courses', component:CoursesComponent,canActivate:[canActivate_gaurd]},
  // {path:'Courses/Course/:id', component:CourseDetailComponent},
  {path:'Courses',canActivateChild:[canActivateChild_guard], children:[
    {path:'Course/:id',component:CourseDetailComponent},
    {path:'popular',component:PopularComponent},
    {path:'CheckOut', component:CheckoutComponent, canActivate:[child_canActivate]}
    // {path:'CheckOut', component:CheckoutComponent,canActivate:[CanActivate_gaurd]},
  ]},
  {path:'Login', component:LoginComponent},
  {path:'**',component:NotFoundComponent}, //WildCard route- always specified below all the routes
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes,{enableTracing:true}),//registering routes
  ],
  
 exports:[RouterModule],
})
export class RoutingModule { }
