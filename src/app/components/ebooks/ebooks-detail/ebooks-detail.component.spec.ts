import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbooksDetailComponent } from './ebooks-detail.component';

describe('EbooksDetailComponent', () => {
  let component: EbooksDetailComponent;
  let fixture: ComponentFixture<EbooksDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbooksDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbooksDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
