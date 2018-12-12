const Sequelize = require('sequelize');

const sequelize = new Sequelize('sample-db', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate().then(
    function() {
        console.log('Connected to sample-db postgres database');
    },
    function(err){
        console.log(err);
    }
)

module.exports = sequelize;