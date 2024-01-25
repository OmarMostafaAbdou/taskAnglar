import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiproductComponent } from './apiproduct.component';

describe('ApiproductComponent', () => {
  let component: ApiproductComponent;
  let fixture: ComponentFixture<ApiproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
