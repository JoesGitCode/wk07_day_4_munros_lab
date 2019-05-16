const MunroListView = require('./munro_list_view.js')

const MunroView = function(element, munro){
    this.element = element
    this.munro = munro
}

MunroView.prototype.render = function(){
    
    const munroName = document.createElement('h2')
    munroName.textContent = this.munro.name
    this.element.appendChild(munroName)

    this.munroDetails()
}

MunroView.prototype.munroDetails = function(){
    const munroDetailList = document.createElement('ul')
    this.element.appendChild(munroDetailList)

    const munroHeight = document.createElement('li')
    munroHeight.textContent = `Height: ${this.munro.height} metres`
    munroDetailList.appendChild(munroHeight)

    const munroMeaning = document.createElement('li')
    munroMeaning.textContent = `Meaning: ${this.munro.meaning}`
    munroDetailList.appendChild(munroMeaning)


}


module.exports = MunroView;