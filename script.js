function toggleMode() {
  const html = document.documentElement //representação do nosso documento em formato de objeto JavaScript
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img") // pesquisar pelo seletor

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("alt", "Foto de rosto Maria Eduarda, em seu quarto")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("alt", "Foto de Maria Eduarda sorrindo, sem óculos")
  }
}
