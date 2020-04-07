import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeganganPage } from './tegangan.page';

describe('TeganganPage', () => {
  let component: TeganganPage;
  let fixture: ComponentFixture<TeganganPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeganganPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeganganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
