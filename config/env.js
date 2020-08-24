const env = {
  database: 'd9enlkc4l6ahak',
  username: 'qaivptlbkkkmxs',
  password: 'e6154f03770b6dfaf852105918c3c2677bc86cae9b40db367dfa31a001124ae2',
  host: 'ec2-52-44-166-58.compute-1.amazonaws.com',
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
