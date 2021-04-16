import { Person } from "./profile";
import { Injectable } from "@angular/core";
//import { HttpClient } from "@angular/common/http";

@Injectable ({
    providedIn: 'root'
})
export class ProfileService {

    //private coursesUrl: string='http://localhost:3100/api/courses'

    //constructor(private httpCLient:HttpClient){}
        
    retrieveAll(): Person[] {
        return PERSONS;
    }

    retrieveById(id:number):Person {
        return PERSONS.find((personIterator: Person) => personIterator.id === id);
    }
    
    save(person:Person): void{
        if(person.id){
            const index = PERSONS.findIndex((personIterator: Person) => personIterator.id === person.id)
            PERSONS[index] = person;
        }
    }
}

var PERSONS: Person[] = [
    {
        id: 1,
        name: 'Shirley',
        age: '48',
        description: 'Independente e gosto de doritos. Viajar é a minha paixão.',
        duration: 120,
        code: 'Namoradinha',
        rating: 23,
        price: 49.99,
        imageUrl: '/assets/images/Shirley.png',
    },
    {
        id: 2,
        name: 'Crystal',
        age: '55',
        description: 'Sou uma donzela cheio de humor e paixão, sonho em viajar o mundo.',
        duration: 80,
        code: 'Brincalhona',
        rating: 42,
        price: 79.99,
        imageUrl: '/assets/images/Crystal.png',
    },
    {
        id: 3,
        name: 'Candy',
        age: '123',
        description: 'Sou uma mulher como nenhuma outra, satisfação é meu segundo nome ;), vivo para viajar.',
        duration: 80,
        code: 'Sensual',
        rating: 999,
        price: 999.99,
        imageUrl: '/assets/images/Candy.png',
    },
    {
        id: 4,
        name: 'Tifanny',
        age: '20',
        description: 'Aceito encontros em restaurantes apenas (ps:homem de verdade paga a conta) | Hobby: Viajar',
        duration: 80,
        code: 'Cleptomaniaca',
        rating: -2,
        price: 5.99,
        imageUrl: '/assets/images/Tifanny.png',
    },
    {
        id: 5,
        name: 'Tracy',
        age: '???',
        description: 'Adoro pular de Bang Jump, vivo para viajar e conhecer diferentes lugares.',
        duration: 80,
        code: 'Aventureira',
        rating: 32,
        price: 89.99,
        imageUrl: '/assets/images/Tracy.png',
    }
];