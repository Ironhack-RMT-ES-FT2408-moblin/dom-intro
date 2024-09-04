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

