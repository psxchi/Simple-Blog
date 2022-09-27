import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRemoveCommentDropdownComponent } from './edit-remove-comment-dropdown.component';

describe('EditRemoveCommentDropdownComponent', () => {
  let component: EditRemoveCommentDropdownComponent;
  let fixture: ComponentFixture<EditRemoveCommentDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRemoveCommentDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRemoveCommentDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
