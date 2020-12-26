import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePartComponent } from './page-part.component';

describe('HomePartComponent', () => {
  let component: PagePartComponent;
  let fixture: ComponentFixture<PagePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
