const tablaMaterias = document.getElementById("tablaMaterias")
const boton1 = document.getElementById("boton1")

async function mostrarMaterias() { // le pongo async para aclarar que va a haber elementos asincronos en la funcion
    const materias = await fetch('./json/materias.json') // defino que algo es asincrono con await
    const materiasParseadas = await materias.json()
    tablaMaterias.innerHTML = `
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Materia</th>
                <th scope="col">Dificultad</th>
                <th scope="col">Preguntas</th>
                <th scope="col"></th>
            </tr>
        </thead>
            <tbody id="tBody">
            </tbody>
        </table>
    
    `
    materiasParseadas.forEach((materia, indice) => {
        tBody.innerHTML += `
            <tr id="materia${indice + 1}">
                <th scope="row">${indice + 1}</th>
                <td>${materia.materia}</td>
                <td>${materia.dificultad}</td>
                <td>${materia.preguntas}</td>
               
                <td><button class="btn btn-dark"> Jugar </button>
            </tr>
        `
})}


boton1.addEventListener('click', mostrarMaterias)

boton1.addEventListener('click', () => {
    mostrarMaterias()
})