/* 
Ejercicio 1
Tenemos un array llamado "planetas" que contiene el nombre de los planetas de nuestro sistema solar ordenados por su distancia con el sol, debes mostrar en consola el nombre del último planeta aplicando un método de array.

planetas=["Mercurio","Venus","Tierra","Marte","Júpiter","Saturno","Urano","Neptuno"]

Ejercicio 2
Dada una playlist de canciones definida con un array verificar si contiene la canción 'Ella Baila Sola' e imprimir en consola .

const lista = ['Flowers','Kill Bill','As It Was','Seven (feat. Latto)','Ella Baila Sola','Cruel Summer','Creepin’ (with The Weeknd & 21 Savage)','Calm Down (with Selena Gomez)','Shakira: Bzrp Music Sessions, Vol. 53','Anti-Hero']

Ejercicio 3
Tenemos un array que contiene la lista de 5 pilotos de Fórmula 1, pero se nos informó que el tercero y cuarto quedaron descalificados por lo que hay que eliminarlos de la lista.

const f1Drivers = ['Lewis Hamilton', 'Max Verstappen', 'Charles Leclerc', 'Fernando Alonso', 'Lando Norris']

Ejercicio 4
Dado el array de pilotos de Fórmula 1, agrega los nombres de 'Sergio Pérez' y 'George Russell' después de 'Max Verstappen'.

Ejercicio 5
Dado el array de pilotos de Fórmula 1, reemplazar 'Fernando Alonso' con 'Carlos Sainz'.

Ejercicio 6
En un colegio hay tres comisiones distintas con 5 alumnos cada una, debido a cambios en los horarios se deben unir las comisiones en una sola llamada 'comisionNueva'. Luego imprimir los nombres de los alumnos de la nueva comisión.

Ejercicio 7
Crea un script que te permita agregar el nombre de varias ciudades en un array hasta que presiones cancelar, luego deberas mostrar en consola los nombres de dichas ciudades ordenadas alfabéticamente

Ejercicio 8
En un array se encuentra la lista de jugadores de un equipo de futbol, pero algunos de la lista estarán de suplentes en el próximo partido. Crea un nuevo array llamado 'suplentes' basado en dicha lista que contenga los nombres de los tres primeros jugadores.

let jugadores = ['Alex Collado', 'Emerson Royal', 'Iñaki Peña','Lionel Messi', 'Gerard Piqué', 'Sergio Busquets', 'Jordi Alba', 'Frenkie de Jong', 'Ansu Fati', 'Pedri', 'Ousmane Dembélé', 'Marc-André ter Stegen', 'Sergi Roberto', 'Ronald Araújo', 'Miralem Pjanic', 'Philippe Coutinho', 'Samuel Umtiti', 'Riqui Puig', 'Sergiño Dest', 'Martin Braithwaite', 'Clément Lenglet', 'Sergiño Dest', 'Éric García', 'Memphis Depay', 'Neto', 'Pedri', 'Oscar Mingueza']
*/

//punto 1
const planetas = ["Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno"]

const longitudPlanetas = planetas.length

const ultimoPlaneta = planetas[longitudPlanetas - 1]

console.log("El último planeta es:", ultimoPlaneta)

//punto 2
const lista = ['Flowers', 'Kill Bill', 'As It Was', 'Seven (feat. Latto)', 'Ella Baila Sola', 'Cruel Summer', 'Creepin’ (with The Weeknd & 21 Savage)', 'Calm Down (with Selena Gomez)', 'Shakira: Bzrp Music Sessions, Vol. 53', 'Anti-Hero']

const listaMinusculas = lista.map(cancion => cancion.toLowerCase())

const contieneEllaBailaSola = listaMinusculas.includes('ella baila sola')

if (contieneEllaBailaSola) {
    console.log("La canción 'Ella Baila Sola' está en la playlist")
} else {
    console.log("La canción 'Ella Baila Sola' no está en la playlist")
}

//punto 3
const f1Pilotos = ['Lewis Hamilton', 'Max Verstappen', 'Charles Leclerc', 'Fernando Alonso', 'Lando Norris']

const tercerPilotoIndex = 2
const cuartoPilotoIndex = 3

f1Pilotos.splice(tercerPilotoIndex, 2)

console.log("Lista de pilotos actualizada:", f1Pilotos)

//punto 4
const f1Drivers = ['Lewis Hamilton', 'Max Verstappen', 'Charles Leclerc', 'Fernando Alonso', 'Lando Norris']

const indiceInsercion = 1

// Nuevos pilotos a agregar
const nuevosPilotos = ['Sergio Pérez', 'George Russell']

f1Drivers.splice(indiceInsercion, 0, ...nuevosPilotos)

console.log("Lista de pilotos actualizada:", f1Drivers)

//punto 5
const f1Pilotos2 = ['Lewis Hamilton', 'Max Verstappen', 'Charles Leclerc', 'Fernando Alonso', 'Lando Norris']

// Nombre del piloto a reemplazar
const pilotoReemplazar = 'Fernando Alonso'

// Nombre del piloto nuevo
const pilotoNuevo = 'Carlos Sainz'

const indicePiloto = f1Pilotos2.indexOf(pilotoReemplazar)


if (indicePiloto !== -1) {

    f1Pilotos2.splice(indicePiloto, 1, pilotoNuevo)

    console.log("Lista de pilotos actualizada:", f1Pilotos2)

} else {
    console.log("El piloto", pilotoReemplazar, "no se encuentra en la lista.")
}

//punto 6
const comision1 = ['Ana', 'Juan', 'Marcos', 'Pedro', 'Lucia']
const comision2 = ['Daniela', 'Pablo', 'Sofía', 'Rodrigo', 'Valentina']
const comision3 = ['Camila', 'Martín', 'Florencia', 'Ignacio', 'Eugenia']

const comisionNueva = comision1.concat(comision2, comision3)

console.log("Comisión nueva:", comisionNueva)

//punto 7
let ciudades = []

function agregarCiudad() {
    const nombreCiudad = prompt("Ingrese el nombre de una ciudad (o escribe 'cancelar' para finalizar):")

    if (nombreCiudad.toLowerCase() !== "cancelar") {
    ciudades.push(nombreCiudad)
    alert("Ciudad agregada: " + nombreCiudad)
    agregarCiudad()
} else {
    console.log("Se ha finalizado la carga de ciudades.")
    }
}

agregarCiudad()

ciudades.sort()

console.log("\nCiudades ordenadas alfabéticamente:")
for (const ciudad of ciudades) {
    console.log(ciudad)
}

//punto 8
const jugadores = ['Alex Collado', 'Emerson Royal', 'Iñaki Peña','Lionel Messi', 'Gerard Piqué', 'Sergio Busquets','Jordi Alba', 'Frenkie de Jong', 'Ansu Fati','Pedri', 'Ousmane Dembélé', 'Marc-André ter Stegen','Sergi Roberto', 'Ronald Araújo', 'Miralem Pjanic','Philippe Coutinho', 'Samuel Umtiti', 'Riqui Puig','Sergiño Dest', 'Martin Braithwaite', 'Clément Lenglet','Sergiño Dest', 'Éric García', 'Memphis Depay','Neto', 'Pedri', 'Oscar Mingueza']

const suplentes = jugadores.slice(0, 3)

console.log("Jugadores suplentes:", suplentes)