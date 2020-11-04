import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfodayaPage } from './infodaya.page';

describe('InfodayaPage', () => {
  let component: InfodayaPage;
  let fixture: ComponentFixture<InfodayaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfodayaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfodayaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
