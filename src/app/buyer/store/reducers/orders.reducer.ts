import { state } from '@angular/animations';
import { State } from '@ngrx/store';
import { InitialState } from '@ngrx/store/src/models';
import { Order } from 'src/app/models/order.model';
import * as fromOrders from '../actions';

export interface OrderState {
  entities: { [id: number]: Order };
  loaded: boolean;
  loading: boolean;
}

export const initialState: OrderState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromOrders.OrdersAction
): OrderState {
  switch (action.type) {
    case fromOrders.LOAD_ORDERS: {
      return {
        ...state,
        loaded: false,
        loading: true,
      };
    }
    case fromOrders.LOAD_ORDERS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }
    case fromOrders.LOAD_ORDERS_SUCCESS: {
      const orders = action.payload;
      const entities = orders.reduce(
        (entities: { [id: number]: Order }, order) => {
          return {
            ...entities,
            [order.id]: order,
          };
        },
        {
          ...state.entities,
        }
      );
      return {
        ...state,
        loaded: true,
        loading: false,
        entities,
      };
    }
  }
  return state;
}

export const getOrdersEntites = (state: OrderState) => state.entities;
export const getOrdersLoaded = (state: OrderState) => state.loaded;
export const getOrdersLoading = (state: OrderState) => state.loading;
