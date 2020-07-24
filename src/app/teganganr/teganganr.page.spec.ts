import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeganganrPage } from './teganganr.page';

describe('TeganganrPage', () => {
  let component: TeganganrPage;
  let fixture: ComponentFixture<TeganganrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeganganrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeganganrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
