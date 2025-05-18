import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KypScreenComponent } from './kyp-screen.component';

describe('KypScreenComponent', () => {
  let component: KypScreenComponent;
  let fixture: ComponentFixture<KypScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KypScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KypScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
