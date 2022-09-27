import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRemovePostDropdownComponent } from './edit-remove-post-dropdown.component';

describe('EditRemovePostDropdownComponent', () => {
  let component: EditRemovePostDropdownComponent;
  let fixture: ComponentFixture<EditRemovePostDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRemovePostDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRemovePostDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
