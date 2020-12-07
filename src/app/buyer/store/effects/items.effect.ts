import { Injectable } from '@angular/core';

import { Effect, Actions, createEffect, ofType } from '@ngrx/effects';
import * as itemActions from '../actions/items.action';

import { map, switchMap, catchError } from 'rxjs/operators';
import { ItemsService } from '../../services/items.service';
import { of } from 'rxjs';

@Injectable()
export class ItemsEffects {
  constructor(private actions$: Actions, private itemsService: ItemsService) {}

  @Effect()
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(itemActions.LOAD_ITEMS),
      switchMap(() => {
        return this.itemsService.getItems().pipe(
          map((items) => new itemActions.LoadItemsSuccess(items)),
          catchError((error) => of(new itemActions.LoadItemsFail(error)))
        );
      })
    )
  );
}
