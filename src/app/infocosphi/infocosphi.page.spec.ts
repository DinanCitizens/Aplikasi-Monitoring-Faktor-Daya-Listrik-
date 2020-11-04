import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfocosphiPage } from './infocosphi.page';

describe('InfocosphiPage', () => {
  let component: InfocosphiPage;
  let fixture: ComponentFixture<InfocosphiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfocosphiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfocosphiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
