import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetlistaService } from '../lista/getlista.service';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {


  personActual: Person = {
    name:'',
    status: '',
    species: '',
    gender: '',
    origin: '',
    location: '',

  };
  message = '';


  constructor(
    private getlistaService: GetlistaService,
    private route: ActivatedRoute,
    private router: Router){ }

    ngOnInit(): void{
      this.message = '';
      this.getPerson(this.route.snapshot.paramMap.get('id'));

    }

    getPerson(id: string | null): void{
      this.getlistaService.get(id)
      .subscribe(
        data => {
          this.personActual = data;
          console.log(data);
        },
        error =>{
          console.log(error);
        });
    }



    updatePerson(): void {
      this.getlistaService.update(this.personActual.id, this.personActual)
        .subscribe(
          response => {
            console.log(response);
            this.message = 'The product was updated!';
          },
          error => {
            console.log(error);
          });
    }

    deletePerson(): void {
      this.getlistaService.delete(this.personActual.id)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/persons']);
          },
          error => {
            console.log(error);
          });
    }





}
