const PubSub = require('../helpers/pub_sub.js')

const MunroListView = function(element){
    this.element = element
}

MunroListView.prototype.bindEvents = function(){
    PubSub.subscribe('Munros:all-data', (event) => {
        console.log('MunroListView subscribes to Munros:all-data');
        console.log(event.detail)
        const allTheMunros = event.detail
        this.render()
    })  
}

MunroListView.prototype.render = function(){
    
}

module.exports = MunroListView;