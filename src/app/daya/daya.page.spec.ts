import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DayaPage } from './daya.page';

describe('DayaPage', () => {
  let component: DayaPage;
  let fixture: ComponentFixture<DayaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DayaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
