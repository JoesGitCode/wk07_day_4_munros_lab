const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const Munros = function(url){
    this.munros = null
    this.url = url
}

Munros.prototype.getData = function(){
    const data = new RequestHelper(this.url)
    data.get()
    .then((munroList) => {
        this.munros = munroList
        PubSub.publish('Munros:all-data', this.munros)
        console.log('Munros published Munros:all-data');
        
    })
}

module.exports = Munros;