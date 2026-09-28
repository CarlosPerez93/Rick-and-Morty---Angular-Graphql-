import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';
import { LocalStorageService } from '@app/shared/services/localStorage.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeModule, RouterTestingModule],
      providers: [
        {
          provide: LocalStorageService,
          useValue: { charactersFav$: of([]) },
        },
      ],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders the favorites drawer and its empty state', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.textContent).toContain('Favorite characters');
    expect(fixture.nativeElement.textContent).toContain('No favorites yet');
  });
});
