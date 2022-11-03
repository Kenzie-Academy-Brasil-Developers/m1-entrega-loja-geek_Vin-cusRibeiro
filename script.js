let produtosAction = [
  {
    img: "./assets/img/actions/animewoman.jpg",
    nome: "Garota de anime",
    preco: "R$150,00",
  },
  {
    img: "./assets/img/actions/dragonballpersonagem.jpg",
    nome: "GokuSSJ",
    preco: "R$200",
  },
  {
    img: "./assets/img/actions/starwarspersonagem.jpg",
    nome: "Baby Woda",
    preco: "R$250",
  },
];

let produtosPaint = [
  (animeWoman = {
    nome: "Relógio",
    img: "./assets/img/painting/clock.jpg",
    preco: "R$15,00",
  }),
  (dragonBallPensornagem = {
    img: "./assets/img/painting/gamepad.jpg",
    nome: "Game Pad",
    preco: "R$20",
  }),
  (starWarsPersonagem = {
    nome: "C3PO",
    img: "./assets/img/painting/personagem.jpg",
    preco: "R$25",
  }),
];

for (let i = 0; i < produtosAction.length; i++) {
  let img = document.createElement("img");
  let title = document.createElement("h3");
  let preco = document.createElement("span");
  preco.textContent = produtosAction[i].preco;
  title.textContent = produtosAction[i].nome;
  img.src = produtosAction[i].img;
  let li = document.createElement("li");
  li.classList.add("lista");
  li.append(img, title, preco);
  const list = document.querySelector(".primeiraSessao ul");
  list.appendChild(li);
  
}

for (let i = 0; i < produtosPaint.length; i++) {
  let img = document.createElement("img");
  let title = document.createElement("h3");
  let preco = document.createElement("span");
  preco.textContent = produtosPaint[i].preco;
  title.textContent = produtosPaint[i].nome;
  img.src = produtosPaint[i].img;
  let li = document.createElement("li");
  li.classList.add("lista");
  li.append(img, title, preco);
  const list = document.querySelector(".segundaSessao ul");
  list.appendChild(li);
}
