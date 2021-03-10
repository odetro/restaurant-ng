import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IsAdminService } from '../services/is-admin.service';
import { RestaurantService } from '../services/restaurant.service';
import { IResturant } from '../services/restaurant.types';

@Component({
  selector: 'app-restaurant-page-edit',
  templateUrl: './restaurant-page-edit.component.html',
  styleUrls: ['./restaurant-page-edit.component.scss']
})

export class RestaurantPageEditComponent implements OnInit {

  constructor(
    private restaurantService: RestaurantService, 
    private isAdminService: IsAdminService,
    private route: ActivatedRoute,
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

  submitManuName (e) {
    this.rest.menu.name = e.target.value;
  }

  submitItemName(e, index: number) {
    this.rest.menu.items[index].name = e.target.value;
  }

  submitItemPrice(e, index: number) {
    this.rest.menu.items[index].price = parseFloat(e.target.value);
  }

  submitForm() {
    this.restaurantService.updateRestMenu(this.rest, this.rest._id);
  }

}
