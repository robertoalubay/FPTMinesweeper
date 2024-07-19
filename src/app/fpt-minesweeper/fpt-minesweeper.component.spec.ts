import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FptMinesweeperComponent } from './fpt-minesweeper.component';
import { Cell } from './cell';


describe('FptMinesweeperComponent', () => {
  let component: FptMinesweeperComponent;
  let fixture: ComponentFixture<FptMinesweeperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FptMinesweeperComponent]
    });

    fixture = TestBed.createComponent(FptMinesweeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have a title Minesweeper', () => {

    expect(component.title).toBe('Minesweeper');
  });

  it('should have called reset alert box', () => {
    spyOn(window, "alert");
    component.reset(0);
    expect(window.alert).toHaveBeenCalledWith('Please enter valid Grid size (2-20).');
  });

});
