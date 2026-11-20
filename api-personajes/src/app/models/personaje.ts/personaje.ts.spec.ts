import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonajeTs } from './personaje.ts';

describe('PersonajeTs', () => {
  let component: PersonajeTs;
  let fixture: ComponentFixture<PersonajeTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajeTs],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonajeTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
