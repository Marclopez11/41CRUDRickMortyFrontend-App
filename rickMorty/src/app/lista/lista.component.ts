import { Component, OnInit } from '@angular/core';
import { GetlistaService } from './getlista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  articulos: any = [];


  constructor(private getlistaService: GetlistaService) {}

  ngOnInit(): void {
    this.getlistaService.retornar()
      .subscribe(result => this.articulos = result)
    }
  }
