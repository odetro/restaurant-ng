import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantPageEditComponent } from './restaurant-page-edit/restaurant-page-edit.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';

const routes: Routes = [
  {path: '' , component: RestaurantListComponent},
  {path: ':rest-id' , component: RestaurantPageComponent},
  {path: ':rest-id/edit', component: RestaurantPageEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
