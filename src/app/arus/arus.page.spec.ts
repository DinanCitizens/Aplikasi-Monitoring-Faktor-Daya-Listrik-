import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArusPage } from './arus.page';

describe('ArusPage', () => {
  let component: ArusPage;
  let fixture: ComponentFixture<ArusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
