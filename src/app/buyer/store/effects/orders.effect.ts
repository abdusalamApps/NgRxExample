import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { OrdersService } from '../../services/orders.service';
import * as orderActions from '../actions/orders.action';

@Injectable()
export class OrdersEffect {
  constructor(
    private actions$: Actions,
    private ordersService: OrdersService
  ) {}
  @Effect()
  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(orderActions.LOAD_ORDERS),
      switchMap(() => {
        return this.ordersService.getOrders().pipe(
          map((orders) => new orderActions.LoadOrdersSuccess(orders)),
          catchError((error) => of(new orderActions.LoadOrdersFail(error)))
        );
      })
    )
  );
}
