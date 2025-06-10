import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit{
    active_route:ActivatedRoute = inject(ActivatedRoute);
    ngOnInit(){
        this.active_route.fragment.subscribe((fragment_val)=>{
            console.log(fragment_val);
            this.jump_to_another_section(fragment_val);
        })
    }

    jump_to_another_section(section){
        document.getElementById(section).scrollIntoView({behavior:'smooth'});
    }
}