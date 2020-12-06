import { Action } from "@ngrx/store";
import { Item } from "../../models/item.model";

// load pizzas
export const LOAD_ITEMS = '[Buyer] Load Items';
export const LOAD_ITEMS_FAIL = '[Buyer] Load Items Fail';
export const LOAD_ITEMS_SUCCESS = '[Buyer] Load Items Success';

export class LoadItems implements Action {
    readonly type = LOAD_ITEMS;
}

export class LoadItemsFail implements Action {
    readonly type = LOAD_ITEMS_FAIL;
    constructor(public payload: any) { }
}

export class LoadItemsSuccess implements Action {
    readonly type = LOAD_ITEMS_SUCCESS;
    constructor(public payload: Item[]) { }
}

// actions types
export type ItemsAction = LoadItems | LoadItemsFail | LoadItemsSuccess;