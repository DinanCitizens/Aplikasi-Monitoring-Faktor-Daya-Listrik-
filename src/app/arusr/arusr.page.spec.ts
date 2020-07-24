import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArusrPage } from './arusr.page';

describe('ArusrPage', () => {
  let component: ArusrPage;
  let fixture: ComponentFixture<ArusrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArusrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArusrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
