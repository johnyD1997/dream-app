import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDreamAppComponent } from './my-dream-app.component';

describe('MyDreamAppComponent', () => {
  let component: MyDreamAppComponent;
  let fixture: ComponentFixture<MyDreamAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDreamAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDreamAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
