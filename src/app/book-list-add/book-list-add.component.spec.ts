import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListAddComponent } from './book-list-add.component';

describe('BookListAddComponent', () => {
  let component: BookListAddComponent;
  let fixture: ComponentFixture<BookListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
