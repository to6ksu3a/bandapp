const bookings = [];

function createBooking(
  userId,
  roomId,
  bookingDate,
  startTime,
  endTime
) {
  if (!userId) {
    throw new Error('User is required');
  }

  if (!roomId) {
    throw new Error('Room is required');
  }

  if (!bookingDate) {
    throw new Error('Date is required');
  }

  const existingBooking = bookings.find(
    booking =>
      booking.roomId === roomId &&
      booking.bookingDate === bookingDate &&
      booking.startTime === startTime
  );

  if (existingBooking) {
    throw new Error('Room already booked');
  }

  const booking = {
    id: Date.now(),
    userId,
    roomId,
    bookingDate,
    startTime,
    endTime,
    status: 'confirmed'
  };

  bookings.push(booking);

  return booking;
}

function getBookingsByRoom(roomId) {
  return bookings.filter(
    booking => booking.roomId === roomId
  );
}

module.exports = {
  createBooking,
  getBookingsByRoom
};