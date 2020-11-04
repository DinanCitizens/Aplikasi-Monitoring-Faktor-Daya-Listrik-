import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoarusPage } from './infoarus.page';

describe('InfoarusPage', () => {
  let component: InfoarusPage;
  let fixture: ComponentFixture<InfoarusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoarusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoarusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
