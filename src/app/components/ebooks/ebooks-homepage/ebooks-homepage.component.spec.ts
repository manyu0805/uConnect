import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbooksHomepageComponent } from './ebooks-homepage.component';

describe('EbooksHomepageComponent', () => {
  let component: EbooksHomepageComponent;
  let fixture: ComponentFixture<EbooksHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbooksHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbooksHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
