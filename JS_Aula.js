let omelete = {
    titulo: "omelete ",
    porcoes: 12,
    ingredientes: ["ovo", "sal", "mussarela", "oregano", "oleo", "mortandela"]
}
console.log("Titulo", omelete.titulo)
console.log("Porções", omelete.porcoes)
omelete.ingredientes.forEach(function(index, element) {
    console.log("Ingredientes", index)
});