import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person.model';
import { GetlistaService } from './getlista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  articulos: any = [];

  persons?: Person[];

  personactual: Person = {};

  actualIndex = -1;

  name = '';
  status = '';
  species = '';
  gender = '';
  origin = '';
  location = '';

  constructor(private getlistaService: GetlistaService) {}

  ngOnInit(): void {
    this.retrievePerson();
  }

  retrievePerson(): void {
    this.getlistaService.getAll().subscribe(
      (data) => {
        this.persons = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      });
  }

  refreshList(): void{
    this.retrievePerson();
    this.personactual = {};
    this.actualIndex = -1;
  }

  setActivePerson(person: Person, index:number): void{
    this.personactual = person;
    this.actualIndex = index;

  }

  removeAllPersons(): void{
    this.getlistaService.deleteAll()
    .subscribe(
      response => {
        console.log(response);
        this.refreshList();
      },
      error => {
        console.log(error)
      });
  }

  searchName(): void{
    this.personactual = {};
    this.actualIndex = -1;

    this.getlistaService.findByName(this.name)
    .subscribe(
      data => {
        this.persons = data;
        console.log(data)
      },
      error => {
        console.log(error)
      });

  }




}
