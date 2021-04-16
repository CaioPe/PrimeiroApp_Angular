import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Person } from "./profile";
import { ProfileService } from './profile.service';

@Component({
    templateUrl: './profile-info.component.html'
})

export class ProfileInfoComponent implements OnInit{
    
    person: Person;

    constructor(private activatedRoute:ActivatedRoute, private profileService:ProfileService){}

    ngOnInit(): void {
        this.person = this.profileService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));
    }

    save(): void{
        this.profileService.save(this.person)
    }
    
}