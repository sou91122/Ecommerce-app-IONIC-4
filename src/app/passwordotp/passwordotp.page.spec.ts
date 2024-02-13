import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PasswordotpPage } from './passwordotp.page';

describe('PasswordotpPage', () => {
  let component: PasswordotpPage;
  let fixture: ComponentFixture<PasswordotpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordotpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordotpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
