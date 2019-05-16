const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const Munros = function(){
    this.munros = null
}

Munros.prototype.getData = function(){
    const data = new RequestHelper('https://munroapi.herokuapp.com/munros')
    data.get()
    .then((munroList) => {
        this.munros = munroList
        PubSub.publish('Munros:all-data', this.munros)
        console.log('Munros published Munros:all-data');
        
    })
}

module.exports = Munros;