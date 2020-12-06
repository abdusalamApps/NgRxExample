import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    const headers = new HttpHeaders({ 'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiYXV0aCI6IltST0xFX0FETUlOXSIsImV4cCI6MTYwNzk1MzI0MH0.M_bA8ov8RDf1PXiesAqFFVLhebMuvVYOp6k2IIIYpwad4A4OpfZaAj0H2eCCxbz9IaO09eYd8stHI4IZ9CU8bg' });

    return this.http
      .get<Item[]>(`http://localhost:8080/get-all-items`, { headers })
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
