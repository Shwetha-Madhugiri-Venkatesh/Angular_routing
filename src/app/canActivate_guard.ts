import { inject } from "@angular/core"
import { AuthorizeService } from "./Services/Authorize.Service"
import { Router } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";

export const canActivate_gaurd = () => {
    const authorize = inject(AuthorizeService);
    const route = inject(Router);
    if(authorize.isLogged){
        return true;
    }else{
        route.navigate(['/Login']);
        return false;
    }
    
}

export const canActivateChild_guard=()=>{
    console.log("parent logic");
    return canActivate_gaurd();
}

export const child_canActivate=()=>{
    console.log("child logic");
    return true;
}

export const canDeactivate=(component:ContactComponent)=>{
    return component.validate_navigation();
}