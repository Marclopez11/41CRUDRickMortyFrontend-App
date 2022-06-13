import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetlistaService {
  constructor(private http : HttpClient) {}

  retornar() {
    return this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8")

  }
}
