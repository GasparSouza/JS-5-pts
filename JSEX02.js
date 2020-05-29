let books = [
    {
        titulo: "Percy Jackson",
        autor: "Rick Riordan",
        lido: true,
    },
    {
        titulo: "A espada do Destino",
        autor: "Wiedźmin",
        lido: true,
    },
    {
        titulo: "A menina que roubava livros",
        autor: "Markus Zusak",
        lido: false,
    },
    {
        titulo: "Manifesto Comunista",
        autor: "Friedrich Engels e Karl Marx",
        lido: true,
    }        
]  
books.forEach(element => {
    if(element.lido){
        console.log(`Você já leu este livro – ${element.titulo} – ${element.autor}`)
    }else{
        console.log(`Você não leu este livro – ${element.titulo} – ${element.autor}`)
    }   
});