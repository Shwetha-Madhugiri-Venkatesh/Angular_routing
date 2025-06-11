import { Injectable } from "@angular/core";
import { UserService } from "./user.service";

@Injectable({
    providedIn:'root',
})
export class AuthorizeService{
    constructor(private user_service:UserService){

    }
    isLogged:boolean;
    login(username:string, password:string){
        let authorised_user = this.user_service.users.find((user)=>user.username===username && user.password===password);
        if(authorised_user){
            this.isLogged=true;
        }else{
            this.isLogged=false;
        }
        return this.isLogged;
    }

    logout(){
        this.isLogged=false;
    }
}