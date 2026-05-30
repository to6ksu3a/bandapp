function validateBookingData(
  userId,
  roomId,
  bookingDate
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
}

module.exports = {
  validateBookingData
};