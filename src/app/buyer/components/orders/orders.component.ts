import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Order } from '../../../models/order.model';
import * as fromStore from '../../store';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders$: Observable<Order[]>;
  constructor(private store: Store<fromStore.BuyerState>) {}

  ngOnInit(): void {
    this.store.dispatch(new fromStore.LoadOrders());
    this.orders$ = this.store.select(fromStore.getAllOrders);
    this.orders$.subscribe((e) => {
      console.log(`Orders count ${e.length}`);
    });
  }
}
