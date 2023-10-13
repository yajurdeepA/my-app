import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineShopComponent } from './online-shop.component';

describe('OnlineShopComponent', () => {
  let component: OnlineShopComponent;
  let fixture: ComponentFixture<OnlineShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineShopComponent]
    });
    fixture = TestBed.createComponent(OnlineShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
