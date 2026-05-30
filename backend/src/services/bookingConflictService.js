const {
  findConflict
} = require('../repositories/bookingRepository');

function hasConflict(
  roomId,
  bookingDate,
  startTime
) {
  return !!findConflict(
    roomId,
    bookingDate,
    startTime
  );
}

module.exports = {
  hasConflict
};