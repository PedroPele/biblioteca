const books = require('./database')
const readline = require('readline-sync')

const buscar = readline.question('buscar livro? s/n ')

if (buscar == 's') { //se o valor de buscar for = a S e pq ele quer buscar um livro
    var autorBuscado = readline.question('Nome Do Autor  ')
    var booksFiltrados = books.filter(checarLivro) // devolve um array com os livros filtrados 
    console.table(booksFiltrados)
}else {
    console.table(books)
}

 

function checarLivro (book){
    console.log(book)
    if(book.autor == autorBuscado) {
        return true
    } else {
        return false
    }
 
}
