let config = {
  user: 'admin',
  password: 'chucknorris2019',
  server: 'chucknorris-rds.cyyprmqr2lmt.sa-east-1.rds.amazonaws.com',
  database: 'chuckNorris',
  //requestTimeout : 120000,
  requestTimeout: 999999,
  connectionTimeout: 999999,
}

module.exports = {
  config
}