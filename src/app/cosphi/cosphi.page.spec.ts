import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CosphiPage } from './cosphi.page';

describe('CosphiPage', () => {
  let component: CosphiPage;
  let fixture: ComponentFixture<CosphiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosphiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CosphiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
