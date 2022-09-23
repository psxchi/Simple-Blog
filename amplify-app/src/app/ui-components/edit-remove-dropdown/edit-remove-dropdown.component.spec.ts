import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRemoveDropdownComponent } from './edit-remove-dropdown.component';

describe('EditRemoveDropdownComponent', () => {
  let component: EditRemoveDropdownComponent;
  let fixture: ComponentFixture<EditRemoveDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRemoveDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRemoveDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
