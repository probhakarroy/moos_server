'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Device_Data', {
      id:{
        allowNull: false,
        //autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement : true
      },
      MachineID: {
        allowNull: false,
        //autoIncrement: true,
        type: Sequelize.INTEGER
      },
      Efficiency:{
        allowNull: false,
        type: Sequelize.REAL
      },
      MotorCurrent:{
        allowNull: false,
        type: Sequelize.REAL
      },
      Missing_Data_300:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      GoodCounter:{
        allowNull: false,
        type: Sequelize.BIGINT
      },
      RPM:{
        allowNull: false,
        type: Sequelize.REAL
      },
      Missing_Data_100:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      BadCounter:{
        allowNull: false,
        type: Sequelize.BIGINT
      },
      motorVoltage:{
        allowNull: false,
        type: Sequelize.REAL
      },
      Missing_Data_200:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      Temp:{
        allowNull: false,
        type: Sequelize.REAL
      },
      Job:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      motorPower:{
        allowNull: false,
        type: Sequelize.REAL
      },
      DiscardCounter:{
        allowNull: false,
        type: Sequelize.BIGINT
      },
      Uptime:{
        allowNull: false,
        type: Sequelize.REAL
      },
      FactoryId:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      Status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Totaltime:{
        allowNull: false,
        type: Sequelize.REAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Device_Data');
  }
};
