const env = {
  database: 'kswjgprqpbvull',
  username: 'd59p200l3vl1dc',
  password: '940dae656b3bd13a69ec9877e2da509c2efd55dcfaa77c5685c83022aaeeb062',
  host: 'ec2-34-192-122-0.compute-1.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = env;
