console.log("probando")

console.log(document)


// busquedas dentro del dom (querySelector)
// querySelector busca el primer elemento que cumpla está condicion

const h1Node = document.querySelector("h1")
// almacenamos la referencia a ese elemento de h1

console.log(h1Node) // los nodos son objetos especiales que multiples propiedades y metodos

console.log(h1Node.innerText) // el texto que haya como contenido de esta etiqueta


// Web scrapping

const otroH1Node = document.querySelector("#second-title")

console.log(otroH1Node)
console.log(otroH1Node.innerText) // string. SOLO TEXTO
console.log(otroH1Node.innerHTML) // string. representación de todas las etiquetas (nodos) como string.

console.log(otroH1Node.id)
console.log(otroH1Node.className)


// querySelectorAll => busca todos los elementos que cumplan la condicion. Nos devuelve una lista de nodos.

// NodeList es una estructura de data que parece un array, tiene comportamientos similares pero NO es un array

const parrafoNodeList = document.querySelectorAll(".some-text")

// podemos buscar elementos por posición
// console.log(parrafoNode[1])

parrafoNodeList.forEach((eachNode) => {
  console.log(eachNode.innerText)
})

// no podemos usar map, o filter o reduce, etc

// busquedas anidadas

const cardNodeList = document.querySelectorAll(".card")
console.log(cardNodeList)


cardNodeList.forEach((eachCardNode) => {

  console.log(eachCardNode)

  // const parrafoNode = document.querySelector("p") // EN TODOS EL DOCUMENTO, busca el primer parrafo.
  const parrafoNode = eachCardNode.querySelector("p") // EN TODOS EL DOCUMENTO, busca el primer parrafo.
  console.log(parrafoNode.innerText)

})

// ejemplo de una selección compleja similar a CSS
// querySelector("section.movie-section ul li.azul:nth-child(2)")


const algo = document.querySelectorAll("p, div")
console.log(algo)


// Manipulación del DOM

// const h1Node = document.querySelector("h1")
console.log(h1Node.innerText)

// h1Node.innerText = "Patata"

// addEventListener programas que escuchan constantemente cuando una accion del usuario ocurre y nos permite ejecutar código en ese momento.
h1Node.addEventListener("mouseenter", () => {
  // console.log("pasando el cursor sobre el h1")
  h1Node.innerText = "Otra cosa"
})

h1Node.addEventListener("mouseleave", () => {
  // console.log("saliendo del h1")
  h1Node.innerText = "Aprendiendo DOM"
})

const incrementBtnNode = document.querySelector("#increment")
const countNode = document.querySelector("#count h2 span")

incrementBtnNode.addEventListener("click", () => {
  console.log("clickando")

  // countNode.innerText = parseInt(countNode.innerText) + 1
  countNode.innerText++

})

// Crear elementos y borrar elementos

const deleteBtnNode = document.querySelector("#delete-btn")

deleteBtnNode.addEventListener("click", () => {
  console.log("clickando btn delete")

  deleteBtnNode.remove() // NO es destruirlo. ES sacarlo de la visualización. Sacarlo del DOM
  console.log(deleteBtnNode)

  // ejemplo de remover todo el body
  // document.querySelector("body").remove()

})

const inputNode = document.querySelector("#name")
const addBtnNode = document.querySelector("#add-form button")
const ulNode = document.querySelector("#add-list")

// console.log(inputNode)
// console.log(addBtnNode)
// console.log(ulNode)

addBtnNode.addEventListener("click", () => {

  // console.log("clickando")

  // 1. como recibo yo lo que está escribiendo el usuario
  // console.log(inputNode.innerText) // no funciona
  console.log(inputNode.value)
  // ulNode.innerText = inputNode.value

  // Forma 1 de añadir y crear elementos al DOM
  // // 2. como puedo yo crear un nuevo elemento
  // const nuevoLiNode = document.createElement("li") // crearlo de cero
  // nuevoLiNode.innerText = inputNode.value
  // console.log(nuevoLiNode)

  // // 3. como puedo yo agregar un elemento al DOM
  // ulNode.append(nuevoLiNode)
  // // sintaxis del appends. aDondeQueremosAñadir.append(loQueQueremosAñadir)

  // Forma 2 de añadir y crear elementos al DOM
  ulNode.innerHTML += `<li>${inputNode.value}</li>`

  inputNode.value = ""

})


// Cambiando clases y estilos

const finalSectionNode = document.querySelector("#final-section")

finalSectionNode.addEventListener("click", () => {

  console.log(finalSectionNode.className)
  // finalSectionNode.className = "container red-container"

  console.log(finalSectionNode.classList)
  // finalSectionNode.classList.remove("blue-container") // remueve
  // finalSectionNode.classList.add("red-container") // añade

  finalSectionNode.classList.toggle("blue-container") // añade si no existe. remueve si existe
  finalSectionNode.classList.toggle("red-container")

})

const eventTitleNode = document.querySelector("#event-title")

eventTitleNode.addEventListener("mouseenter", () => {

  eventTitleNode.innerText = "otra cosa"
  // Manipular directamente desde JS los estilos

  // console.log(eventTitleNode.style)
  eventTitleNode.style.color = "red"
  eventTitleNode.style.backgroundColor = "darkgreen"
  eventTitleNode.style.padding = "20px"

})
  
eventTitleNode.addEventListener("click", () => {

  eventTitleNode.innerText = "Clickando"
  // Manipular directamente desde JS los estilos

  // console.log(eventTitleNode.style)
  eventTitleNode.style.color = "blue"
  eventTitleNode.style.backgroundColor = "lightgreen"
  eventTitleNode.style.padding = "30px"

})

eventTitleNode.addEventListener("mouseleave", () => {

  eventTitleNode.innerText = "Cambiando estilos!"
  // Manipular directamente desde JS los estilos

  // console.log(eventTitleNode.style)
  eventTitleNode.style.color = "black"
  eventTitleNode.style.backgroundColor = "white"
  eventTitleNode.style.padding = "0"

})