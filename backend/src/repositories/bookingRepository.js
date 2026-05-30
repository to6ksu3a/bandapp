const bookings = [];

function save(booking) {
  bookings.push(booking);
}

function findByRoom(roomId) {
  return bookings.filter(
    booking => booking.roomId === roomId
  );
}

function findConflict(
  roomId,
  bookingDate,
  startTime
) {
  return bookings.find(
    booking =>
      booking.roomId === roomId &&
      booking.bookingDate === bookingDate &&
      booking.startTime === startTime
  );
}

module.exports = {
  save,
  findByRoom,
  findConflict
};