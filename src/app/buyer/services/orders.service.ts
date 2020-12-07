import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Order } from 'src/app/models/order.model';
import * as urls from '../../urls';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    const headers = new HttpHeaders({
      authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiYXV0aCI6IltST0xFX0FETUlOXSIsImV4cCI6MTYwNzk1MzI0MH0.M_bA8ov8RDf1PXiesAqFFVLhebMuvVYOp6k2IIIYpwad4A4OpfZaAj0H2eCCxbz9IaO09eYd8stHI4IZ9CU8bg',
    });
    return this.http
      .get<Order[]>(urls.ordersUrls.Get.getAllOrdersUrl, { headers })
      .pipe(catchError((error: any) => Observable.throw(error)));
  }
}
