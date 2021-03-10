import { Injectable } from '@angular/core';
import { IResturant } from './restaurant.types';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {

  API_URL: string = "/api/";

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
    ) { }

  async getResturants(): Promise<IResturant[]> {
    return await this.http.get<IResturant[]>(this.API_URL + 'rests').toPromise();
  }

  async getResturant(restId): Promise<IResturant[]> {
    return await this.http.get<IResturant[]>(`${this.API_URL + 'rests'}/${restId}`).toPromise();
  }

  async updateRestMenu(restDetail:IResturant, restId:string): Promise<IResturant> {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(restDetail)
    };
    const result = await fetch(`/api/rests/${restId}`, requestOptions);
    this.toastr.success('Menu updated successfully!');
    return result.json();    
  }

  //async updateRestMenu(restDetail:IResturant, restId: string) {
  //  const headers = { 'content-type': 'application/json'};
  //  const body = JSON.stringify(restDetail);
  //  const results  = await this.http.post<IResturant[]>(`${this.API_URL + 'rests'}/${restId}`, body, {'headers':headers});
  //  this.toastr.success('Menu updated successfully!');
  //  return results;
  //}
}
