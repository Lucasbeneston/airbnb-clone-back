const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      this.belongsTo(models.User);
      this.belongsTo(models.Place);
    }
  }
  Booking.init(
    {
      place: DataTypes.STRING,
      user: DataTypes.STRING,
      checkIn: DataTypes.DATE,
      checkOut: DataTypes.DATE,
      placeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Booking',
    }
  );
  return Booking;
};
