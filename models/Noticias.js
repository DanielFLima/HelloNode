const bd = require('./bd')

const Noticias = bd.sequelize.define('noticias', {
    titulo:{
        type: bd.Sequelize.STRING,
        allowNull: false
    },
    conteudo:{
        type: bd.Sequelize.TEXT
    }

})

//Noticias.sync({force: true}); só executa uma vez para criar a tabela


module.exports = Noticias