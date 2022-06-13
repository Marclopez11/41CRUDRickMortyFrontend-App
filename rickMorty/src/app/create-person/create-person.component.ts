import { Component, OnInit } from '@angular/core';
import { GetlistaService } from '../lista/getlista.service';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})


export class CreatePersonComponent implements OnInit {




  person: Person = {
      name: '',
      status:  '',
      species: '',
      gender:  '',
      origin:  '',
      location:  ''
  };
  submitted = false;

  constructor(private getlistaService: GetlistaService) { }

  ngOnInit(): void {
  }

  savePerson(): void {
    const data = {
      name: this.person.name,
      status: this.person.status,
      species: this.person.species,
      gender: this.person.gender,
      origin: this.person.origin,
      location: this.person.location,
    };

    this.getlistaService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }


  newPerson():void{
    this.submitted = false;
    this.person = {

      name: '',
      status:  '',
      species: '',
      gender:  '',
      origin:  '',
      location:  '',

  };

  }
}
