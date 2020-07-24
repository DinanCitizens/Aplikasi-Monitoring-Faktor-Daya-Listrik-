import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArustPage } from './arust.page';

describe('ArustPage', () => {
  let component: ArustPage;
  let fixture: ComponentFixture<ArustPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArustPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArustPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
