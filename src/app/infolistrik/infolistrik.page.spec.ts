import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfolistrikPage } from './infolistrik.page';

describe('InfolistrikPage', () => {
  let component: InfolistrikPage;
  let fixture: ComponentFixture<InfolistrikPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfolistrikPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfolistrikPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
