import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoteganganPage } from './infotegangan.page';

describe('InfoteganganPage', () => {
  let component: InfoteganganPage;
  let fixture: ComponentFixture<InfoteganganPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoteganganPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoteganganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
