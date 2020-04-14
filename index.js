const doc =   document.getElementById("menu")

// const toggleMenu = () => {
//     if (doc.classList == "") {
//       doc.classList.add("open");
//       document.getElementById("hero").classList.add("rotate")
//     } else {
//       doc.classList.remove("open");
//     }
//   }

const toggleMenu = () =>{
  doc.classList.toggle("open")
  document.getElementById("hero").classList.toggle("minus")
}