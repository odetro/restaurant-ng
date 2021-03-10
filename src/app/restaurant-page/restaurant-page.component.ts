import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IsAdminService } from '../services/is-admin.service';
import { RestaurantService } from '../services/restaurant.service';
import { IResturant } from '../services/restaurant.types';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.scss']
})

export class RestaurantPageComponent implements OnInit {

  constructor(
    private restaurantService: RestaurantService, 
    private isAdminService: IsAdminService,
    private route: ActivatedRoute
    ) { }

  restID: string;
  rest: IResturant;

  async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe( async params => {
      const restParam = params.get('rest-id').split("-");
      this.restID = restParam.pop();
      let results = await this.restaurantService.getResturant(this.restID);
      this.rest = results[0];
    });
  }

  get adminStatus() {
    return this.isAdminService.isAdmin();
  }
}
