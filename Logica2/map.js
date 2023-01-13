const cursos = ['HTML' , 'CSS' , 'javaScript']
cursos.map((el,i) => {console.log(el + (i+1))  } )


const colunas = 10
const linhas = 10

function criarGrid() {
    return new Array(colunas).fill(null).map( 
        () => new Array(linhas).fill(0).map( 
            () => Math.floor(Math.random()*2)) )
}

new Array (10)

let grid = criarGrid()

console.log(grid)