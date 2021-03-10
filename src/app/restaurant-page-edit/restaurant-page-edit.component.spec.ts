import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantPageEditComponent } from './restaurant-page-edit.component';

describe('RestaurantPageEditComponent', () => {
  let component: RestaurantPageEditComponent;
  let fixture: ComponentFixture<RestaurantPageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantPageEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantPageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
