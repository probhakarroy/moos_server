var amqp = require('amqplib/callback_api');
var models = require('.././models');

amqp.connect({
    protocol: process.env.RABBITMQ_PROTOCOL,
    hostname: process.env.RABBITMQ_HOST || '192.168.31.225',
    port: process.env.RABBITMQ_PORT || '5672',
    username: process.env.RABBITMQ_USER || 'pi',
    password: process.env.RABBITMQ_PASSWORD || 'Iamgroot',
    vhost: process.env.RABBITMQ_VHOST || '/moos'
}, function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'Factory_data_raw';
    ch.assertQueue(q, {durable: true});
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
    ch.consume(q, function(msg) {
        var obj = msg.content;
        var json = JSON.parse(obj);

        //{MACHINE_ID:1, FACTORY_ID:1, STATUS:'ACTIVE', UPTIME:'22.22', TOTALTIME:'33.33', EFFICIENCY:50, GOOD_COUNTER: 10000, BAD_COUNTER: 5000, DISCARD_COUNTER: 2500, JOB: 125, MOTOR_POWER:'929292.33',MOTOR_VOLTAGE:'230', MOTOR_CURRENT:'10.0', TEMP:'24.63', MISSING_100:0,MISSING_200:0, MISSING_300:0, CREATED_AT:'Thu Jan 31 19:47:41 2019',UPDATED_AT:getDateTime()};

        models.Device_Data.create({
          MachineID: Number(json.MachineId),
          Efficiency: Number(json.Efficiency),
          MotorCurrent: Number(json.Sensor_Data.MotorCurrent),
          Missing_Data_300: Number(json.Sensor_Data.Missing_Data_300),
          GoodCounter: Number(json.Sensor_Data.GoodCounter),
          RPM: Number(json.Sensor_Data.RPM),
          Missing_Data_100: Number(json.Sensor_Data.Missing_Data_100),
          BadCounter: Number(json.Sensor_Data.BadCounter),
          motorVoltage: Number(json.Sensor_Data.motorVoltage),
          Missing_Data_200: Number(json.Sensor_Data.Missing_Data_200),
          Temp: Number(json.Sensor_Data.Temp),
          Job: Number(json.Sensor_Data.Job),
          motorPower: Number(json.Sensor_Data.motorPower),
          DiscardCounter: Number(json.Sensor_Data.DiscardCounter),
          Uptime: Number(json.Uptime),
          FactoryId: Number(json.FactoryId),
          Status: json.Status,
          Totaltime: Number(json.Totaltime),
          createdAt: json.TimeStamp
        }).catch(err =>{
          console.log(err);
        });

        //Acknowledgemnt For RabbitMq
        ch.ack(msg);
    },
 {noAck: false});
  });
});
