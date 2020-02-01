import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbooksListingComponent } from './ebooks-listing.component';

describe('EbooksListingComponent', () => {
  let component: EbooksListingComponent;
  let fixture: ComponentFixture<EbooksListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbooksListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbooksListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
