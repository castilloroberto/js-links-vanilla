import Link from "./Link.js"


const link = new Link()
link.Hora = '9:45PM'
link.Titulo = 'Progra multi'
link.Link = 'jshdjshdjdh'


const add = document.getElementById('add')
const show = document.getElementById('show')
const create = document.getElementById('create')
const listContaainer = document.getElementById('list-c')
const list = document.getElementById('list')

add.onclick = ()=>{
    listContaainer.style.display = 'none'
    create.style.display = 'block'
}

show.onclick = ()=>{
    create.style.display = 'none'
    listContaainer.style.display = 'block'
    
}






