import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TegangansPage } from './tegangans.page';

describe('TegangansPage', () => {
  let component: TegangansPage;
  let fixture: ComponentFixture<TegangansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TegangansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TegangansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
