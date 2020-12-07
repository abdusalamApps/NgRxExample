import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromFeature from '../reducers';
import * as fromOrders from '../reducers/orders.reducer';
import { Order } from 'src/app/models/order.model';

export const getOrderState = createSelector(
  fromFeature.getBuyerState,
  (state: fromFeature.BuyerState) => state.orders
);

export const getOrdersEntities = createSelector(
  getOrderState,
  fromOrders.getOrdersEntites
);

export const getSelectedOrder = createSelector(
  getOrdersEntities,
  fromRoot.getRouterState,
  (entities, router): Order => {
    return router.state && entities[router.state.params.orderId];
  }
);

export const getAllOrders = createSelector(getOrdersEntities, (entities) => {
  return Object.keys(entities).map((id) => entities[id]);
});

export const getOrdersLoaded = createSelector(
  getOrderState,
  fromOrders.getOrdersLoaded
);
export const getOrdersLoading = createSelector(
  getOrderState,
  fromOrders.getOrdersLoading
);
