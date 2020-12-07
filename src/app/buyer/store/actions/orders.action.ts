import { Action } from '@ngrx/store';
import { Order } from '../../../models/order.model';

export const LOAD_ORDERS = '[Buyer] Load Orders';
export const LOAD_ORDERS_FAIL = '[Buyer] Load Orders Fail';
export const LOAD_ORDERS_SUCCESS = '[Buyer] Load Orders Success';

export class LoadOrders implements Action {
  readonly type = LOAD_ORDERS;
}

export class LoadOrdersFail implements Action {
  readonly type = LOAD_ORDERS_FAIL;
  constructor(public payload: any) {}
}

export class LoadOrdersSuccess implements Action {
  readonly type = LOAD_ORDERS_SUCCESS;
  constructor(public payload: Order[]) {}
}

// action types
export type OrdersAction = LoadOrders | LoadOrdersFail | LoadOrdersSuccess;
