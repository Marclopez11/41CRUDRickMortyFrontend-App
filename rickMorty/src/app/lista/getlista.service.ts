import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';

const baseUrl = 'http://localhost:3000/persons';

@Injectable({
  providedIn: 'root',
})
export class GetlistaService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Person[]> {
    return this.http.get<Person[]>(baseUrl);
  }

  get(id: any): Observable<Person> {
    return this.http.get('${baseUrl}/$(id)');
  }

  create(data: any): Observable<any> {
    return this.http.get(baseUrl, data);
  }

  update(id: any, data: any): Observable<any>{
    return this.http.put('$(baseUrl)/$(id)',data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete('$(baseUrl)/$(id)');
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<Person[]> {
    return this.http.get<Person[]>('${baseUrl}?title=${title}');
  }

  retornar() {
    return this.http.get(
      'https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8'
    );
  }
}
