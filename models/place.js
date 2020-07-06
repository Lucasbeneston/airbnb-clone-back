const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      this.belongsTo(models.City, {
        foreignKey: 'cityId',
      });
      this.hasMany(models.Booking);
    }
  }
  Place.init(
    {
      user: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      rooms: DataTypes.INTEGER,
      bathrooms: DataTypes.INTEGER,
      maxGuests: DataTypes.INTEGER,
      priceByNight: DataTypes.INTEGER,
      cityId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Place',
    }
  );
  return Place;
};
