
// let hello = document.createElement("h1")
// hello.textContent="Hello i m ";

// const { createElement } = require("react")

// let h1  = React.createElement("h1",{},React.createElement("span",{},"hello honey bunny"));
// console.log(h1)

// document.body.append(hello)

//  let getrrot=document.querySelector("div")
// let elem =  ReactDOM.createRoot(getrrot).render(h1);

// console.log(document)






// // let h1 = document.createElement("h1")
// // h1.textContent="Hello i m "
// // document.body.append(h1)

// let h1 = React.createElement("h1",{},"i m react")
// let get= document.querySelector("div")
//  let root = ReactDOM.createRoot(get)
//  root.render(h1)

// // document.body.append(h1)

// let react = React.createElement("h1",{},"i m react ")
// let div2 = React.createElement("div",{},React.createElement("div",{},React.createElement("h2",{}," i m totally happy")))
// let div = document.querySelector("div")
//           let root =   ReactDOM.createRoot(div)
//           root.render([react,div2])
// // console.log(document)


let h1= React.createElement("h1",{},React.createElement("div",{},React.createElement("h1",{},"i m h1 inside div")))
let div = document.querySelector("div")
let root = ReactDOM.createRoot(div)

console.log(root.render(h1))