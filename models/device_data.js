'use strict';
module.exports = (sequelize, DataTypes) => {
  const Device_Data = sequelize.define('Device_Data', {
    MachineID: DataTypes.INTEGER,
    Efficiency: DataTypes.REAL,
    MotorCurrent: DataTypes.REAL,
    Missing_Data_300: DataTypes.INTEGER,
    GoodCounter: DataTypes.BIGINT,
    RPM: DataTypes.REAL,
    Missing_Data_100: DataTypes.INTEGER,
    BadCounter: DataTypes.BIGINT,
    motorVoltage: DataTypes.REAL,
    Missing_Data_200: DataTypes.INTEGER,
    Temp: DataTypes.REAL,
    Job: DataTypes.INTEGER,
    motorPower: DataTypes.REAL,
    DiscardCounter: DataTypes.BIGINT,
    Uptime: DataTypes.REAL,
    FactoryId: DataTypes.INTEGER,
    Status: DataTypes.STRING,
    Totaltime: DataTypes.REAL,
    createdAt: DataTypes.DATE
  });
  Device_Data.associate = function(models) {
    // associations can be defined here
  };
  return Device_Data;
};
