import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArussPage } from './aruss.page';

describe('ArussPage', () => {
  let component: ArussPage;
  let fixture: ComponentFixture<ArussPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArussPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArussPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
