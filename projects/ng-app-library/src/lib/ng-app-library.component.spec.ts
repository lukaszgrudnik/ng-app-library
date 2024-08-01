import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAppLibraryComponent } from './ng-app-library.component';

describe('NgAppLibraryComponent', () => {
  let component: NgAppLibraryComponent;
  let fixture: ComponentFixture<NgAppLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgAppLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgAppLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
