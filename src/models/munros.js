const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const Munros = function(url){
    this.munros = null
    this.url = url
}

Munros.prototype.bindEvents = function(){
    PubSub.subscribe('MunroSelectView:single-region-select', (event) => {
        console.log('Munros has subscribed to MunroSelectView:single-region-select');
        const regionSelect = event.detail
        console.log('aaaaaaa', regionSelect);
        this.getMunrosByRegion(regionSelect)
        
    })
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

Munros.prototype.getMunrosByRegion = function(regionSelect){
    
    const reallySelectedMunros = this.munros.filter(munro => munro.region === regionSelect) 
        console.log(reallySelectedMunros);

        PubSub.publish('Munros:munros-of-region', reallySelectedMunros)

}
    



module.exports = Munros;