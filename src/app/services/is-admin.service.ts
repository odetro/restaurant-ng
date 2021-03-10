import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsAdminService {

  admin: boolean;
  constructor(private route: ActivatedRoute) { }

  isAdmin(): boolean {
    this.route.queryParams.subscribe(params => {
      if (params['isAdmin']) {
        this.admin = (params['isAdmin'] == 'true');
      }
    });
    return this.admin;
  }
}
