import { state } from '@angular/animations';
import { Item } from '../../models/item.model';
import * as fromItems from '../actions/items.action';

export interface ItemState {
    entities: { [id: number]: Item };
    loaded: boolean;
    loading: boolean;
}

export const initialState: ItemState = {
    entities: {},
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: fromItems.ItemsAction
): ItemState {
    switch (action.type) {
        case fromItems.LOAD_ITEMS: {
            return {
                ...state,
                loading: true,
                loaded: false
            };
        }
        case fromItems.LOAD_ITEMS_SUCCESS: {
            const items = action.payload;
            const entities = items.reduce(
                (entities: { [id: number]: Item }, item) => {
                    return {
                        ...entities,
                        [item.itemId]: item
                    }
                }, {
                ...state.entities
            })
            return {
                ...state,
                loading: false,
                loaded: true,
                entities
            };
        }
        case fromItems.LOAD_ITEMS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
    }
    return state;
}

export const getItemsEntities = (state: ItemState) => state.entities;
export const getItemsLoading = (state: ItemState) => state.loading;
export const getItemsLoaded = (state: ItemState) => state.loaded;