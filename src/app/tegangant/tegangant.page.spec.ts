import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TegangantPage } from './tegangant.page';

describe('TegangantPage', () => {
  let component: TegangantPage;
  let fixture: ComponentFixture<TegangantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TegangantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TegangantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
