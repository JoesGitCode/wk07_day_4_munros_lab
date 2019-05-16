const PubSub = require('../helpers/pub_sub')

const MunroSelectView = function(){


}

MunroSelectView.prototype.bindEvents = function(){
    PubSub.subscribe('Munros:all-data', (event) => {
        console.log('MunroSelectView subscribed to Munros:all-data');
        const allMunros = event.data
        console.log(allMunros);        
        
    })
}

module.exports = MunroSelectView;