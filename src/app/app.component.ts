import { Component } from '@angular/core';
import { IsAdminService } from './services/is-admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'restaurant-ng';

  constructor (private isAdminService: IsAdminService) {}

  get adminStatus() {
    return this.isAdminService.isAdmin();
  }
}
