import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDetailsComponent } from './booking-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConcertBookingService } from 'src/app/_service/concert-booking.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('BookingDetailsComponent', () => {
  let component: BookingDetailsComponent;
  let fixture: ComponentFixture<BookingDetailsComponent>;

  beforeEach(async () => {
    const ConcertBookingServiceSub = () => ({
      addBookingForConcert: (_data: any) => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
      getConcertDetails: (_req: any, _interactionId: any) => ({
        pipe: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) }),
      }),
    });
    
    await TestBed.configureTestingModule({
      declarations: [ BookingDetailsComponent ],
      imports: [HttpClientModule],
      providers: [
        HttpClient,
        {
          provide: ConcertBookingService,
          useFactory: ConcertBookingServiceSub,
        },
        HttpClientModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
