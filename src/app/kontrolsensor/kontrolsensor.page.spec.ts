import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KontrolsensorPage } from './kontrolsensor.page';

describe('KontrolsensorPage', () => {
  let component: KontrolsensorPage;
  let fixture: ComponentFixture<KontrolsensorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontrolsensorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KontrolsensorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
