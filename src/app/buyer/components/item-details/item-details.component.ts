import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item.model';

import * as fromStore from '../../store';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  item$: Observable<Item>;

  constructor(private store: Store<fromStore.BuyerState>) {}

  ngOnInit(): void {
    this.item$ = this.store.select(fromStore.getSelectedItem);
  }
}
