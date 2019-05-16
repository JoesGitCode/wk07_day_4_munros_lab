const PubSub = require('../helpers/pub_sub')

const MunroSelectView = function(element){
    this.element = element


}

MunroSelectView.prototype.bindEvents = function(){
    PubSub.subscribe('Munros:all-data', (event) => {
        console.log('MunroSelectView subscribed to Munros:all-data');
        const allMunros = event.detail
        this.getRegions(allMunros) 
        
    this.element.addEventListener('change', (event) => {
        const selectedIndex = event.target.value
        console.log(event.target.value);
        
        PubSub.publish('MunroSelectView:single-region-select', selectedIndex)
        console.log('MunroSelectView has published MunroSelectView:single-region-select');
    })   

    
    })




}

MunroSelectView.prototype.getRegions = function(allMunros){

    const uniqueRegions = allMunros.map(munro => munro.region)
    .filter((region, index, regions) => regions.indexOf(region) === index);

    uniqueRegions.forEach((munro) => {
        const option = document.createElement('option')
        option.textContent = munro
        option.value = munro
        this.element.appendChild(option)
    })
}



module.exports = MunroSelectView;