import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromItems from './items.reducer';
import * as fromOrders from './orders.reducer';

export interface BuyerState {
  items: fromItems.ItemState;
  orders: fromOrders.OrderState;
}

export const reducers: ActionReducerMap<BuyerState> = {
  items: fromItems.reducer,
  orders: fromOrders.reducer,
};

export const getBuyerState = createFeatureSelector<BuyerState>('buyer');
