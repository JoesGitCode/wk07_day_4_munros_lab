const PubSub = require('../helpers/pub_sub.js')
const MunroView = require('./munro_view.js')

const MunroListView = function(element){
    this.element = element
}

MunroListView.prototype.bindEvents = function(){
    PubSub.subscribe('Munros:all-data', (event) => {
        console.log('MunroListView subscribes to Munros:all-data');
        console.log(event.detail)
        this.allTheMunros = event.detail
        this.populate()
    })  
}

MunroListView.prototype.populate = function(){
    this.allTheMunros.forEach((munro) => {
        
        const munroView = new MunroView(this.element, munro)
        munroView.render()
    })
}

module.exports = MunroListView;