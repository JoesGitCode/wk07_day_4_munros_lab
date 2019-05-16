const MunroListView = require('./munro_list_view.js')

const MunroView = function(element, munro){
    this.element = element
    this.munro = munro
}

MunroView.prototype.render = function(){
    
    const munroName = document.createElement('h2')
    munroName.textContent = this.munro.name
    this.element.appendChild(munroName)
}

module.exports = MunroView;