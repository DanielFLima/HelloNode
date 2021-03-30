const Sequelize = require('sequelize')
const sequelize = new Sequelize('node','root','root',{
    host: "localhost",
    dialect: 'mysql'
})


sequelize.authenticate().then(function(){
    console.log("Conectado.")
}).catch(function(erro){
    console.log("Falha ao conectar " + erro)
})


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}