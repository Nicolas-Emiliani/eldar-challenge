import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPostsComponent } from './data-posts.component';

describe('DataPostsComponent', () => {
  let component: DataPostsComponent;
  let fixture: ComponentFixture<DataPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataPostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
