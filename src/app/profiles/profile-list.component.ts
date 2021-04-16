import { Component } from "@angular/core";
// import { profile } from "node:console"; - Error recomended to remove it -
import { Person } from './profile';
import { ProfileService } from "./profile.service";

@Component({
    //selector: 'app-profile-list',
    templateUrl: './profile-list.component.html'
})

export class ProfileListComponent {

    FilteredProfiles: Person[] = [];
    
    _profiles: Person[] = [];
    _filterBy: string;
   
    constructor(private profileService: ProfileService)  {}

    ngOnInit(): void{
        this._profiles = this.profileService.retrieveAll();
        this.FilteredProfiles = this._profiles;
    }
 
    set filter(value: string){
        this._filterBy=value;
        this.FilteredProfiles = this._profiles.filter((profile:Person) => profile.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }

}