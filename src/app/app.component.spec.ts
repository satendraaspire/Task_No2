import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ConcertBookingService } from './_service/concert-booking.service';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  const activatedRouteStub = () => ({
    params: { pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }) },
  });

  const routerStub = () => ({ navigate: () => ({}) });

  const ConcertBookingServiceSub = () => ({
    addBookingForConcert: (_data: any) => ({
      pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
    }),
    getConcertDetails: (_req: any, _interactionId: any) => ({
      pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
    }),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        AppRoutingModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
      ],
      providers: [
        {
          provide: ConcertBookingService,
          useFactory: ConcertBookingServiceSub,
        },
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'task_No2'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('task_No2');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('.content span')?.textContent
    ).toBeUndefined();
  });
});
