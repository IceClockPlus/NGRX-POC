import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoProgressBarComponent } from './todo-progress-bar.component';

describe('TodoProgressBarComponent', () => {
  let component: TodoProgressBarComponent;
  let fixture: ComponentFixture<TodoProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoProgressBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
