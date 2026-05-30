const {
  createBooking
} = require(
  '../src/services/bookingService'
);

describe('Booking Service', () => {

  test(
    'creates booking successfully',
    () => {
      const booking =
        createBooking(
          1,
          101,
          '2026-06-01',
          '18:00',
          '20:00'
        );

      expect(
        booking.status
      ).toBe('confirmed');
    }
  );

  test(
    'throws error when user missing',
    () => {
      expect(() =>
        createBooking(
          null,
          101,
          '2026-06-01',
          '18:00',
          '20:00'
        )
      ).toThrow(
        'User is required'
      );
    }
  );

  test(
    'throws error when room missing',
    () => {
      expect(() =>
        createBooking(
          1,
          null,
          '2026-06-01',
          '18:00',
          '20:00'
        )
      ).toThrow(
        'Room is required'
      );
    }
  );

  test(
    'prevents duplicate booking',
    () => {
      createBooking(
        2,
        102,
        '2026-06-02',
        '19:00',
        '21:00'
      );

      expect(() =>
        createBooking(
          3,
          102,
          '2026-06-02',
          '19:00',
          '21:00'
        )
      ).toThrow(
        'Room already booked'
      );
    }
  );

  test(
    'allows booking same room at another time',
    () => {
      const booking =
        createBooking(
          4,
          102,
          '2026-06-02',
          '21:00',
          '22:00'
        );

      expect(
        booking.status
      ).toBe('confirmed');
    }
  );
});