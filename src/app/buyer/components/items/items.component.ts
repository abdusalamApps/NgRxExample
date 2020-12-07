import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Item } from '../../../models/item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  items$: Observable<Item[]>;
  loading$: Observable<Item[]>;

  constructor(private store: Store<fromStore.BuyerState>) {}

  ngOnInit(): void {
    this.items$ = this.store.select(fromStore.getAllItems);
    this.loading$ = this.store.select<any>(fromStore.getItemsLoading);
    this.store.dispatch(new fromStore.LoadItems());
  }

  onSelect(): void {}
}
