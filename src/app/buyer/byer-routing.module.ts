import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as components from './components';

const routes: Routes = [
  { path: '', component: components.ItemsComponent },
  { path: 'items', component: components.ItemsComponent },
  { path: 'new', component: components.ItemDetailsComponent },
  { path: 'items/:itemId', component: components.ItemDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyerRoutingModule {}
