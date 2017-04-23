/* tslint:disable:no-unused-variable */

import {TestBed, async, ComponentFixtureAutoDetect, ComponentFixture} from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('HomeComponent (templateUrl)', () => {

  let homeInstance:    HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  // let h1:      DebugElement;
  // let app_h1:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      // needs to be here!
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    });

    TestBed.compileComponents();  // compile template and css
  }));

  /*
   *
   *  synchronous beforeEach
   *
   */

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);

    homeInstance = fixture.componentInstance; // BannerComponent test instance
    // query for title by css selector
    // h1 = fixture.debugElement.query(By.css('h1'));
    // app_h1 = h1.nativeElement;
  });

    /*
     *
     *  Test some headings
     *
     */

    it('should render title in a h1 tag', () => {
      fixture.detectChanges();
      expect(homeInstance.main_title).toContain('TODAY I ...');
    });

    it('should be right sub-title Must do', () => {
      fixture.detectChanges();
      expect(homeInstance.subtitles[0].must).toContain('Must do');
    });

    it('should be right sub-title Want do', () => {
      fixture.detectChanges();
      expect(homeInstance.subtitles[1].want).toContain('Want do');
    });

    it('should be right sub-title Meet', () => {
      fixture.detectChanges();
      expect(homeInstance.subtitles[2].meet).toContain('Meet');
    });

    it('should be right sub-title New learned things', () => {
      fixture.detectChanges();
      expect(homeInstance.subtitles[3].new_things).toContain('New learned things');
    });

    it('should be right sub-title My feelings', () => {
      fixture.detectChanges();
      expect(homeInstance.subtitles[4].feelings).toContain('My feelings');//My feelings
    });
});
