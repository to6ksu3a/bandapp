const {
  validateBookingData
} = require('./validationService');

const {
  hasConflict
} = require('./bookingConflictService');

const {
  save,
  findByRoom
} = require('../repositories/bookingRepository');

function createBooking(
  userId,
  roomId,
  bookingDate,
  startTime,
  endTime
) {
  validateBookingData(
    userId,
    roomId,
    bookingDate
  );

  if (
    hasConflict(
      roomId,
      bookingDate,
      startTime
    )
  ) {
    throw new Error(
      'Room already booked'
    );
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

  save(booking);

  return booking;
}

function getBookingsByRoom(roomId) {
  return findByRoom(roomId);
}

module.exports = {
  createBooking,
  getBookingsByRoom
};