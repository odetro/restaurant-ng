import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { IResturant } from '../services/restaurant.types';

@Component({
selector: 'app-restaurant-list',
templateUrl: './restaurant-list.component.html',
styleUrls: ['./restaurant-list.component.scss']
})

export class RestaurantListComponent implements OnInit {

  restList: IResturant[];  
  
  constructor(
    private restaurantService: RestaurantService
  ) {}

  async ngOnInit(): Promise<void> {
    let results = await this.restaurantService.getResturants();
    this.restList = results;
  }
}