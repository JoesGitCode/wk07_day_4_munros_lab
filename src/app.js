const Munros = require('./models/munros.js')
const MunroListView = require('./views/munro_list_view.js')

document.addEventListener('DOMContentLoaded', () => {
    console.log('javascript loaded');

    const munrolist = document.querySelector('div#munros')
    

    const munroListView = new MunroListView(munrolist)
    munroListView.bindEvents()

    const munros = new Munros()
    munros.getData()
    
})