var sequelize = require('./db')

for (let i = 0; i < 100; i++) {
  console.log(`${i} query started`)
  sequelize.query('DO SLEEP(5);')
    .then(result => {
      console.log(`${i}: success`)
    })
    .catch(e => {
      console.log(`${i}: error. ${e}`)
    })
}