import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromItems from './items.reducer';

export interface BuyerState {
    items: fromItems.ItemState
}

export const reducers: ActionReducerMap<BuyerState> = {
    items: fromItems.reducer
}

export const getBuyerState = createFeatureSelector<BuyerState>('buyer');

