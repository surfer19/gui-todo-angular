/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.main_title).toEqual ('TODAY I ...');
  }));

  it('should be right sub-title Must do', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.subtitles[0].must).toEqual('Must do');
  }));

  it('should be right sub-title Want do', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.subtitles[1].want).toEqual('Want do');
  }));

  it('should be right sub-title Meet', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.subtitles[2].meet).toEqual('Meet');
  }));

  it('should be right sub-title New learned things', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.subtitles[3].new_things).toEqual('New learned things');
  }));

  it('should be right sub-title My feelings', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.subtitles[4].feelings).toEqual('My feelings');
  }));

});
