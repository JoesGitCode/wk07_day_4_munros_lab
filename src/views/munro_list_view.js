const PubSub = require('../helpers/pub_sub.js')
const MunroView = require('./munro_view.js')

const MunroListView = function(element){
    this.element = element
}

MunroListView.prototype.bindEvents = function(){
    PubSub.subscribe('Munros:munros-of-region', (event) => {
        console.log('MunroListView subscribes to Munros:all-data');
        console.log(event.detail)
        const allTheMunros = event.detail
        console.log(allTheMunros);
        this.populate(allTheMunros)
        
    })  
}

MunroListView.prototype.populate = function(allTheMunros){
    allTheMunros.forEach((munro) => {
        
        const munroView = new MunroView(this.element, munro)
        munroView.render()
    })
}

module.exports = MunroListView;