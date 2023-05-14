import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundraiserListComponent } from './fundraiser-list.component';

describe('FundraiserListComponent', () => {
  let component: FundraiserListComponent;
  let fixture: ComponentFixture<FundraiserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundraiserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundraiserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
